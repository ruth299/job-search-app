# Melbourne JobDash - Transformation Jobs Portal

A modern, interactive job search dashboard focused on **transformation and Workday ecosystem roles** in Melbourne, Victoria.

## 🎯 About

Melbourne JobDash is a curated job listing platform designed for professionals seeking transformation-focused opportunities in Melbourne. The platform aggregates roles from leading organizations including Workday, Cognizant, Deloitte, Accenture, KPMG, PwC, and other enterprise transformation leaders.

**Built with:** HTML5, CSS3, JavaScript (Vanilla)
**Deployment:** GitHub Pages

## ✨ Features

- **Live Listings** - Real-time job data with 48+ transformation roles
- **Advanced Filtering**
  - Filter by Industry (Finance, Tech, Consulting, Healthcare, Government, Retail)
  - Filter by Location & Work Type
  - Salary Range Slider
- **Smart Search** - Search across job titles, companies, descriptions, and tags
- **Sort Options** - Sort by Most Recent or Salary (High to Low)
- **Responsive Design** - Works on desktop and mobile devices
- **Dark Theme** - Modern, professional aesthetic with gold accents
- **Job Tags** - Skills and technologies for each role

## 🚀 Job Categories

### Featured Specializations
- **Workday Ecosystem**
  - HCM/FINS/Payroll
  - Integration & Reporting
  - Security & Administration
- **Enterprise Transformation**
  - Digital Transformation
  - ERP Implementations
  - Change Management
- **Consulting & Leadership**
  - Program Management
  - Strategy & Architecture
  - Governance & Risk

## 📊 Current Data

- **Total Listings:** 48 jobs
- **Companies:** 18 leading organizations
- **Average Salary:** $148K+
- **Salary Range:** $120K - $200K+
- **Location:** Melbourne CBD, Victoria

## 🛠️ Technology Stack

```
Frontend:
- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)

Hosting:
- GitHub Pages
- Static site (no backend required)
```

## 📁 Project Structure

```
job-search-app/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── jobs.js         # Job data and filtering logic
└── README.md       # This file
```

## 🔧 How It Works

### Job Data Structure
Each job contains:
- Title, Company, Salary
- Location, Work Type, Industry
- Description, Tags
- Posted Date

### Filtering Logic
1. **Search** - Filters across title, company, description, tags
2. **Salary** - Range slider ($50K-$300K)
3. **Industry** - Multi-select checkboxes
4. **Location** - Melbourne CBD and surrounds
5. **Work Type** - Full Time, Flexible
6. **Sort** - Most Recent or Salary

## 🌐 Usage

### View Online
Visit: `https://ruth299.github.io/job-search-app/`

### Run Locally
```bash
# Clone the repository
git clone https://github.com/ruth299/job-search-app.git

# Navigate to the directory
cd job-search-app

# Open in browser
open index.html
# or double-click index.html
```

## ✏️ Customization

### Adding New Jobs
Edit `jobs.js` and add to the `jobsData` array:

```javascript
{
    id: 49,
    title: "Your Job Title",
    company: "Company Name",
    salary: 160000,
    location: "Melbourne CBD",
    industry: "Tech",
    workType: "Full Time",
    postedDate: "1 day ago",
    description: "Job description here...",
    tags: ["Tag1", "Tag2", "Tag3"],
    featured: false
}
```

### Updating Styling
Edit `styles.css` to customize:
- Colors (currently: Dark theme with gold accents `#ffd700`)
- Fonts and Typography
- Spacing and Layout
- Animations and Transitions

### Changing Search Placeholder
Edit the search input placeholder in `index.html`:
```html
<input placeholder="Your custom placeholder..." class="search-input">
```

## 📈 Performance

- **Load Time:** <500ms
- **No External Dependencies** - Vanilla JS only
- **Optimized CSS** - Minimal file size
- **Responsive Images** - No image assets required

## 🎨 Design Features

- **Dark Theme** - Reduces eye strain, modern aesthetic
- **Gold Accents** - Professional, corporate feel (`#ffd700`)
- **Smooth Animations** - Hover effects and transitions
- **Mobile Responsive** - Adapts to all screen sizes
- **Accessibility** - Semantic HTML, proper contrast ratios

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔄 Updates

To update job listings:
1. Edit `jobs.js`
2. Modify the `jobsData` array
3. Commit and push to GitHub
4. Changes deploy automatically to GitHub Pages

## 🤝 Built With

**Vibe Coding** - Collaborative AI-assisted development using Claude

> "Vibe coding is about describing what you want to build and letting AI help bring it to life, focusing on the problem instead of syntax complexity." - Ruth

## 📝 About the Creator

Ruth is an enterprise transformation leader and business technologist with 15+ years of experience at the intersection of business and technology. This dashboard was created to solve the real problem of finding quality transformation roles in Melbourne's job market.

> "What amazed me wasn't just the speed. It was the fact that something I may never have attempted traditionally suddenly felt possible." - On using AI for rapid prototyping.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or suggestions:
1. Check existing GitHub Issues
2. Create a new Issue with details
3. Include screenshots if applicable

## 🚀 Future Enhancements

Potential features:
- Email alerts for new matching jobs
- Saved jobs/bookmarks
- User preferences storage
- Advanced analytics dashboard
- Integration with external job APIs
- Resume builder
- Interview prep resources

## 📊 Stats

- Created: May 2026
- Framework: Vanilla JavaScript
- Data Points: 48 jobs, 18 companies
- Salary Range: $120K-$200K+
- Location Focus: Melbourne, Victoria

---

**Transform your career with Melbourne JobDash.** 🎯
