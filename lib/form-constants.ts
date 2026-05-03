// =============================================================================
// FORM CONSTANTS - All form fields, labels, options, and messages
// =============================================================================

export const FORM_CONFIG = {
  // Web3Forms endpoint - user should set their access key
  web3formsEndpoint: "https://api.web3forms.com/submit",
  // This will be replaced with actual key when user configures
  accessKey: "YOUR_ACCESS_KEY_HERE",
}

export const FORM_FIELDS = {
  // Contact Information
  name: {
    label: "Full Name",
    placeholder: "Your name",
    required: true,
  },
  email: {
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
  },
  phone: {
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    required: false,
  },
  company: {
    label: "Company / Studio",
    placeholder: "Your company or studio name",
    required: false,
  },

  // Project Details
  projectType: {
    label: "Project Type",
    placeholder: "Select project type",
    required: true,
    options: [
      { value: "interior", label: "Interior Visualization" },
      { value: "exterior", label: "Exterior Visualization" },
      { value: "floorplan", label: "3D Floor Plans" },
      { value: "mixed", label: "Mixed (Interior + Exterior)" },
      { value: "other", label: "Other" },
    ],
  },
  buildingType: {
    label: "Building Type",
    placeholder: "Select building type",
    required: true,
    options: [
      { value: "residential-single", label: "Single-Family Residential" },
      { value: "residential-multi", label: "Multi-Family / Apartments" },
      { value: "commercial", label: "Commercial / Office" },
      { value: "retail", label: "Retail / Hospitality" },
      { value: "mixed-use", label: "Mixed-Use Development" },
      { value: "other", label: "Other" },
    ],
  },
  numberOfImages: {
    label: "Estimated Number of Images",
    placeholder: "Select range",
    required: true,
    options: [
      { value: "1-3", label: "1-3 images" },
      { value: "4-6", label: "4-6 images" },
      { value: "7-10", label: "7-10 images" },
      { value: "10+", label: "10+ images" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  timeline: {
    label: "Desired Timeline",
    placeholder: "Select timeline",
    required: true,
    options: [
      { value: "1-2-weeks", label: "1-2 weeks" },
      { value: "2-4-weeks", label: "2-4 weeks" },
      { value: "1-2-months", label: "1-2 months" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  budget: {
    label: "Budget Range",
    placeholder: "Select budget range",
    required: false,
    options: [
      { value: "under-1000", label: "Under $1,000" },
      { value: "1000-2500", label: "$1,000 - $2,500" },
      { value: "2500-5000", label: "$2,500 - $5,000" },
      { value: "5000-10000", label: "$5,000 - $10,000" },
      { value: "10000+", label: "$10,000+" },
      { value: "discuss", label: "Prefer to discuss" },
    ],
  },

  // File References
  fileLinks: {
    label: "File Links",
    placeholder: "Paste links to your files (Google Drive, Dropbox, WeTransfer, Pinterest boards)",
    required: false,
    helpText: "Share links to CAD files, reference images, mood boards, or any other project materials",
  },

  // Project Description
  description: {
    label: "Project Description",
    placeholder: "Tell me about your project. Include details about the design, specific views needed, materials or style preferences, and any other relevant information.",
    required: true,
  },

  // Additional Options
  hasCAD: {
    label: "I have CAD files / blueprints ready",
    required: false,
  },
  hasReferences: {
    label: "I have reference images / mood boards",
    required: false,
  },
  needsAnimation: {
    label: "I may need animation / video",
    required: false,
  },
}

export const FORM_MESSAGES = {
  submitButton: "Send Inquiry",
  submitting: "Sending...",
  success: {
    title: "Thank you for your inquiry!",
    message: "I've received your project details and will get back to you within 24-48 hours with a quote and timeline estimate.",
  },
  error: {
    title: "Something went wrong",
    message: "There was an error sending your inquiry. Please try again or email me directly at bevel.graphics1@gmail.com",
  },
  validation: {
    required: "This field is required",
    email: "Please enter a valid email address",
  },
}

export const FORM_SECTIONS = {
  contact: {
    title: "Contact Information",
    description: "How can I reach you?",
  },
  project: {
    title: "Project Details",
    description: "Tell me about what you need",
  },
  files: {
    title: "Project Files",
    description: "Share your project materials",
  },
  additional: {
    title: "Additional Information",
    description: "Anything else I should know",
  },
}
