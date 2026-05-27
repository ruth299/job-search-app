// Default initial jobs if the user has a blank tracker
const defaultJobs = [
    { id: 1, role: "Transformation Leader", company: "Melbourne Corporate Hub", location: "Melbourne, VIC", status: "Applied" },
    { id: 2, role: "Senior Delivery Lead", company: "Aussie Tech Solutions", location: "Richmond, VIC (Hybrid)", status: "Interviewing" },
    { id: 3, role: "Product Manager", company: "Fintech Growth Ltd", location: "Southbank, VIC", status: "Offer" }
];

// Initialize application state from localStorage or use defaults
let trackedJobs = JSON.parse(localStorage.getItem('job_tracker_data')) || defaultJobs;

// Save current board state to browser storage
function saveToLocalStorage() {
    localStorage.setItem('job_tracker_data', JSON.stringify(trackedJobs));
}

// Main rendering engine for updating visual board columns and item badges
function renderBoard() {
    const lists = {
        'Applied': document.getElementById('list-applied'),
        'Interviewing': document.getElementById('list-interviewing'),
        'Offer': document.getElementById('list-offer'),
        'Rejected': document.getElementById('list-rejected')
    };
    
    const counts = {
        'Applied': document.getElementById('count-applied'),
        'Interviewing': document.getElementById('count-interviewing'),
        'Offer': document.getElementById('count-offer'),
        'Rejected': document.getElementById('count-rejected')
    };

    // Reset container layouts to structural clean templates
    Object.values(lists).forEach(list => { if(list) list.innerHTML = ''; });
    
    // Tracking map initialization variables
    let counters = { 'Applied': 0, 'Interviewing': 0, 'Offer': 0, 'Rejected': 0 };

    trackedJobs.forEach(job => {
        counters[job.status]++;
        
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h3>${escapeHTML(job.role)}</h3>
            <p><strong>${escapeHTML(job.company)}</strong><br>${escapeHTML(job.location)}</p>
            <div class="card-actions">
                <select onchange="updateJobStatus(${job.id}, this.value)">
                    <option value="Applied" ${job.status === 'Applied' ? 'selected' : ''}>Applied</option>
                    <option value="Interviewing" ${job.status === 'Interviewing' ? 'selected' : ''}>Interviewing</option>
                    <option value="Offer" ${job.status === 'Offer' ? 'selected' : ''}>Offer</option>
                    <option value="Rejected" ${job.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                </select>
                <button class="btn-delete" onclick="deleteJob(${job.id})">Delete</button>
            </div>
        `;

        if (lists[job.status]) {
            lists[job.status].appendChild(card);
        }
    });

    // Write counts to structural dashboard badges
    Object.keys(counts).forEach(status => {
        if(counts[status]) counts[status].textContent = counters[status];
    });
}

// Add a brand new application into the tracker
document.getElementById('job-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const roleInput = document.getElementById('form-role');
    const companyInput = document.getElementById('form-company');
    const locationInput = document.getElementById('form-location');
    const statusInput = document.getElementById('form-status');

    const newJob = {
        id: Date.now(), // unique timestamp id
        role: roleInput.value,
        company: companyInput.value,
        location: locationInput.value,
        status: statusInput.value
    };

    trackedJobs.push(newJob);
    saveToLocalStorage();
    renderBoard();

    // Reset layout fields
    roleInput.value = '';
    companyInput.value = '';
    locationInput.value = '';
});

// Move a card pipeline column dynamically
window.updateJobStatus = function(id, newStatus) {
    trackedJobs = trackedJobs.map(job => {
        if (job.id === id) {
            return { ...job, status: newStatus };
        }
        return job;
    });
    saveToLocalStorage();
    renderBoard();
};

// Drop an entry out of browser memory completely
window.deleteJob = function(id) {
    if (confirm("Are you sure you want to remove this job tracking card?")) {
        trackedJobs = trackedJobs.filter(job => job.id !== id);
        saveToLocalStorage();
        renderBoard();
    }
};

// Helper function to escape text safely against parsing injection anomalies
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Initial script execution layout kick-off trigger
document.addEventListener('DOMContentLoaded', renderBoard);
