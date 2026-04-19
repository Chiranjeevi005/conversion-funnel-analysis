document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GLOBAL CHART DEFAULTS ---
    Chart.defaults.color = '#475569'; // Slate 600
    Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
    Chart.defaults.plugins.legend.display = false;
    
    // --- 2. CATEGORY BUBBLE DATA (EXACT POSITIONS) ---
    const categoryData = [
        { x: 12.5, y: 65, r: 18, label: 'Videocards', color: '#16A34A' }, // Slightly darker green
        { x: 10.5, y: 58, r: 15, label: 'Printers', color: '#16A34A' },
        { x: 9.5, y: 52, r: 12, label: 'Cartridges', color: '#16A34A' },
        { x: 7.2, y: 35, r: 11, label: 'Monitors', color: '#D97706' }, // Slightly darker yellow
        { x: 6.8, y: 25, r: 11, label: 'Laptops', color: '#D97706' },
        { x: 3.5, y: 48, r: 10, label: 'Vacuum', color: '#2563EB' }, // Slightly darker blue
        { x: 3.2, y: 45, r: 9, label: 'Juicer', color: '#2563EB' },
        { x: 2.2, y: 18, r: 7, label: 'Coffee Machine', color: '#DC2626' }, // Slightly darker red
        { x: 1.8, y: 12, r: 7, label: 'Clocks', color: '#DC2626' },
        { x: 1.5, y: 10, r: 6, label: 'Kettle', color: '#DC2626' }
    ];

    const ctx = document.getElementById('categoryMatrixChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                data: categoryData,
                backgroundColor: (ctx) => ctx.raw?.color || '#2563EB',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    title: { 
                        display: true, 
                        text: 'Interest (View → Cart %)', 
                        font: { size: 10, weight: '700' },
                        color: '#475569'
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)', drawBorder: false },
                    min: 0, max: 15,
                    ticks: { callback: (v) => v + '%', color: '#64748B' }
                },
                y: {
                    title: { 
                        display: true, 
                        text: 'Efficiency (Cart → Purchase %)', 
                        font: { size: 10, weight: '700' },
                        color: '#475569'
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)', drawBorder: false },
                    min: 0, max: 80,
                    ticks: { callback: (v) => v + '%', color: '#64748B' }
                }
            },
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    titleColor: '#0F172A',
                    bodyColor: '#475569',
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1,
                    padding: 8,
                    callbacks: {
                        label: (ctx) => `${ctx.raw.label}: Interest ${ctx.raw.x}%, Efficiency ${ctx.raw.y}%`
                    }
                }
            }
        },
        plugins: [{
            id: 'categoryReplication',
            beforeDraw: (chart) => {
                const { ctx, chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;
                const midX = x.getPixelForValue(6);
                const midY = y.getPixelForValue(40);

                ctx.save();
                
                // 1. QUADRANT BACKGROUNDS
                ctx.fillStyle = 'rgba(37, 99, 235, 0.02)'; // Lighter Blue
                ctx.fillRect(left, top, midX - left, midY - top);
                
                ctx.fillStyle = 'rgba(22, 163, 74, 0.02)'; // Lighter Green
                ctx.fillRect(midX, top, right - midX, midY - top);
                
                ctx.fillStyle = 'rgba(220, 38, 38, 0.02)'; // Lighter Red
                ctx.fillRect(left, midY, midX - left, bottom - midY);
                
                ctx.fillStyle = 'rgba(217, 119, 6, 0.02)'; // Lighter Yellow
                ctx.fillRect(midX, midY, right - midX, bottom - midY);

                // 2. QUADRANT DIVIDERS
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.setLineDash([5, 5]);
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(midX, top); ctx.lineTo(midX, bottom);
                ctx.moveTo(left, midY); ctx.lineTo(right, midY);
                ctx.stroke();

                // 3. QUADRANT LABELS
                ctx.setLineDash([]);
                const isMobile = chart.width < 600;
                ctx.font = `800 ${isMobile ? '7' : '9'}px Inter`;
                ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
                ctx.textAlign = 'left';
                
                const padding = isMobile ? 8 : 15;
                ctx.fillText('FIX DISCOVERY', left + padding, top + (isMobile ? 15 : 25));
                ctx.fillText('DROP / AUDIT', left + padding, bottom - (isMobile ? 10 : 20));
                ctx.fillText('SCALE SUCCESS', midX + padding, top + (isMobile ? 15 : 25));
                ctx.fillText('FIX CHECKOUT', midX + padding, bottom - (isMobile ? 10 : 20));

                ctx.restore();
            },
            afterDatasetsDraw: (chart) => {
                const { ctx } = chart;
                ctx.save();
                const isMobile = chart.width < 600;
                ctx.font = `700 ${isMobile ? '7' : '8'}px Inter`;
                ctx.fillStyle = '#1E293B';
                ctx.textAlign = 'center';
                
                chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
                    const item = categoryData[index];
                    const labelPadding = isMobile ? item.r + 4 : item.r + 6;
                    ctx.fillText(item.label, datapoint.x, datapoint.y - labelPadding);
                });
                ctx.restore();
            }
        }]
    });
});
