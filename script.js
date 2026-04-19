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
                    ticks: { 
                        callback: (v) => v + '%', 
                        color: '#64748B',
                        font: { size: 10 }
                    }
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
                    ticks: { 
                        callback: (v) => v + '%', 
                        color: '#64748B',
                        font: { size: 10 }
                    }
                }
            },
            plugins: {
                legend: { display: false },
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

    // --- 3. EXPORT LOGIC REDESIGNED ---
    const btn = document.getElementById("downloadBtn");
    const modal = document.getElementById("downloadModal");
    const closeBtn = document.getElementById("closeModal");
    const mainDownloadBtn = document.getElementById("mainDownloadBtn");
    const formatCards = document.querySelectorAll(".format-card");
    let selectedFormat = null;

    btn.onclick = () => {
        modal.classList.remove("hidden");
        resetModalSelection();
    };

    closeBtn.onclick = () => modal.classList.add("hidden");

    // Close on outside click
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.add("hidden");
        }
    };

    function resetModalSelection() {
        selectedFormat = null;
        formatCards.forEach(c => c.classList.remove("selected"));
        mainDownloadBtn.classList.add("disabled");
        mainDownloadBtn.innerText = "Select a format";
    }

    formatCards.forEach(card => {
        card.onclick = () => {
            formatCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedFormat = card.getAttribute("data-format");
            
            mainDownloadBtn.classList.remove("disabled");
            mainDownloadBtn.innerText = `Download ${selectedFormat}`;
        }
    });

    function prepareDesktopView() {
        const el = document.getElementById("dashboard");
        const downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.style.display = "none";
        el.style.width = "1200px";
        el.style.maxWidth = "1200px";
        el.style.transform = "scale(1)";
        el.style.height = "auto";
    }

    function resetView() {
        const el = document.getElementById("dashboard");
        const downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.style.display = "";
        el.style.width = "";
        el.style.maxWidth = "";
        el.style.height = "";
    }

    mainDownloadBtn.onclick = async () => {
        if (!selectedFormat) return;

        mainDownloadBtn.innerText = "Generating Report...";
        mainDownloadBtn.classList.add("disabled");
        
        prepareDesktopView();
        await new Promise(resolve => setTimeout(resolve, 150)); // Allow rendering
        const element = document.getElementById("dashboard");

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                width: 1200,
                height: element.scrollHeight,
                windowWidth: 1200,
                backgroundColor: "#F1F5F9"
            });

            if (selectedFormat === "JPG") {
                const link = document.createElement("a");
                link.download = `Conversion_Analysis_${new Date().toISOString().slice(0, 10)}.jpg`;
                link.href = canvas.toDataURL("image/jpeg", 1.0);
                link.click();
            } else {
                const imgData = canvas.toDataURL("image/png");
                const { jsPDF } = window.jspdf || window;
                if (!jsPDF) throw new Error("jsPDF missing");
                
                const pdf = new jsPDF("p", "mm", "a4");
                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save(`Conversion_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
            }
        } catch (err) {
            console.error("Export Error:", err);
            alert(`Failed to generate ${selectedFormat} report.`);
        } finally {
            resetView();
            modal.classList.add("hidden");
            resetModalSelection();
        }
    };
});
