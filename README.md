# Harrison Pest Management Website

A professional, responsive website for Harrison Pest Management - a pest control service provider. Built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Professional design with blue and dark navy color scheme
- **Navigation**: Sticky navigation bar with smooth scrolling
- **Hero Section**: Eye-catching header with call-to-action buttons
- **Services**: Showcase of 6 pest control services
- **Benefits**: Highlight key value propositions
- **CTA Section**: Emergency contact information
- **Mobile Menu**: Hamburger menu for mobile devices
- **Interactive Elements**: Smooth animations and hover effects

## File Structure

```
harrison-pest-management/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## How to View

### Option 1: Direct File Opening
Simply open `index.html` in your web browser:
- On macOS: Double-click the file or right-click > Open with > Browser
- Or drag the file into your browser window

### Option 2: Using a Local Server (Recommended)

**Using Python (macOS/Linux):**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
# Install globally (first time only)
npm install -g http-server

# Run server
http-server
```

**Using VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then navigate to:
- `http://localhost:8000` (Python)
- `http://localhost:8080` (http-server)
- `http://127.0.0.1:5500` (VS Code Live Server)

## Sections

### Navigation Bar
- Sticky header with logo and menu
- Responsive hamburger menu for mobile
- Quick access to all major sections
- "Get a Free Quote" call-to-action button

### Hero Section
- Main headline with accent color highlight
- Subheading and description
- Three feature highlights
- Two primary action buttons (Call Now, Schedule Online)

### Info Strip
- Badges for Licensed & Insured, Eco-Friendly, and Phone Number
- Quick trust signals

### Benefits Section
- Four cards highlighting key service benefits
- Responsive grid layout
- Hover effects for interactivity

### Services Section
- Six service cards (Spiders, Rodents, Cockroaches, Ants, Termites, Wasps)
- Each with description and "Learn More" link
- Hover animations

### CTA (Call to Action) Section
- Dark background with emergency contact
- 24/7 availability messaging

### Footer
- Multiple sections for navigation
- Contact information
- Links to key pages

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #0052CC;
    --dark-navy: #0f1419;
    --light-blue: #1e88e5;
    --accent-blue: #00a8ff;
    /* ... etc */
}
```

### Contact Information
Update the phone number and links throughout:
- `index.html`: Search for "(555) 246-PEST (7378)" and replace with actual number
- Update email: "info@harrisonpest.com"

### Services
Modify the service cards in the HTML to match your actual offerings.

## JavaScript Functionality

The `script.js` file includes:
- Mobile menu toggle
- Smooth scrolling for navigation
- Call and schedule button handling
- Intersection Observer for fade-in animations
- Email and phone validation functions
- Keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Images: Currently using emoji placeholders. Replace with actual images for production
2. Icons: Consider using an icon library like Font Awesome for better quality
3. Optimize: Minify CSS and JavaScript for production
4. Speed: Consider adding a CDN for assets in production

## Next Steps for Production

1. **Add actual images** (hero section, service icons)
2. **Implement booking system** (connect Schedule Online button)
3. **Add form validation** (contact/quote form)
4. **Setup email notifications** (for contact form submissions)
5. **Add analytics** (Google Analytics, heatmaps)
6. **SSL certificate** (for HTTPS)
7. **Domain setup** (register domain name)
8. **SEO optimization** (meta tags, structured data)
9. **Mobile app consideration** (for booking and notifications)
10. **Review section** (add real testimonials)

## License

© 2026 Harrison Pest Management. All rights reserved.

## Support

For questions or improvements, contact info@harrisonpest.com
