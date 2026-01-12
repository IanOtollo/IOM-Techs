import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, X, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Service types
const serviceTypes = [
  "Website Development",
  "Mobile App Development",
  "E-commerce Platform",
  "Web Application",
  "API Development",
  "Cloud Solutions",
  "Technical Consulting",
  "Other",
];

// Budget ranges
const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Not sure yet",
];

// Timeline options
const timelineOptions = [
  "Urgent (1-2 weeks)",
  "1 Month",
  "2-3 Months",
  "3-6 Months",
  "6+ Months",
  "Flexible",
];

// Features list
const features = [
  "Contact Form",
  "Payment Integration (M-Pesa/Stripe)",
  "User Authentication",
  "Admin Dashboard",
  "Database Integration",
  "API Integration",
  "Mobile Responsive",
  "SEO Optimization",
  "E-commerce/Shopping Cart",
  "Content Management System (CMS)",
  "Analytics Integration",
  "Email Notifications",
];

const ProjectRequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [uploadingFiles, setUploadingFiles] = useState(false);

  const [formData, setFormData] = useState({
    // Client Info
    name: "",
    email: "",
    phone: "",
    company: "",
    
    // Project Details
    serviceType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    
    // Features
    selectedFeatures: [] as string[],
    
    // References
    referenceLinks: "",
    designStyle: "",
    brandColors: "",
    
    // Meeting
    preferredContact: "",
    googleMeetRequest: false,
    meetingTimes: "",
    additionalNotes: "",
  });

  // Handle file drop
  const onDrop = async (acceptedFiles: File[]) => {
    setUploadingFiles(true);
    
    try {
      const uploadPromises = acceptedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "iomtechs_files"); // Replace this
        formData.append("cloud_name", "dn4py6rcq"); // Replace this

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dn4py6rcq/upload", // Replace this
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        return {
          name: file.name,
          url: data.secure_url,
          size: (file.size / 1024 / 1024).toFixed(2), // MB
        };
      });

      const uploaded = await Promise.all(uploadPromises);
      setUploadedFiles([...uploadedFiles, ...uploaded]);
      toast.success(`${acceptedFiles.length} file(s) uploaded successfully!`);
    } catch (error) {
      toast.error("Failed to upload files. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setUploadingFiles(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 10 * 1024 * 1024, // 10MB
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
  });

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const toggleFeature = (feature: string) => {
    setFormData({
      ...formData,
      selectedFeatures: formData.selectedFeatures.includes(feature)
        ? formData.selectedFeatures.filter((f) => f !== feature)
        : [...formData.selectedFeatures, feature],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare email template parameters
      const filesText = uploadedFiles.length > 0
        ? uploadedFiles.map((f) => `${f.name} (${f.size}MB): ${f.url}`).join("\n")
        : "No files uploaded";

      const featuresText = formData.selectedFeatures.length > 0
        ? formData.selectedFeatures.map((f) => `☑ ${f}`).join("\n")
        : "No specific features selected";

      const templateParams = {
        // Client Info
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone,
        client_company: formData.company || "N/A",
        
        // Project Details
        service_type: formData.serviceType,
        project_description: formData.projectDescription,
        budget: formData.budget,
        timeline: formData.timeline,
        
        // Features
        features: featuresText,
        
        // References
        uploaded_files: filesText,
        reference_links: formData.referenceLinks || "None provided",
        design_style: formData.designStyle || "Not specified",
        brand_colors: formData.brandColors || "Not specified",
        
        // Meeting
        preferred_contact: formData.preferredContact || "Email",
        google_meet: formData.googleMeetRequest ? "Yes" : "No",
        meeting_times: formData.meetingTimes || "Not specified",
        additional_notes: formData.additionalNotes || "None",
        
        // Metadata
        submission_date: new Date().toLocaleString("en-US", {
          timeZone: "Africa/Nairobi",
          dateStyle: "full",
          timeStyle: "short",
        }),
      };

      // Send email via EmailJS
      await emailjs.send(
        "service_evplnwu", // Replace with your EmailJS service ID
        "template_2aov8ws", // Replace with your EmailJS template ID
        templateParams,
        "T0C9sK3BLdHt5UKxF" // Replace with your EmailJS public key
      );

      toast.success("Thank you! Your project request has been submitted. We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        selectedFeatures: [],
        referenceLinks: "",
        designStyle: "",
        brandColors: "",
        preferredContact: "",
        googleMeetRequest: false,
        meetingTimes: "",
        additionalNotes: "",
      });
      setUploadedFiles([]);
    } catch (error) {
      toast.error("Failed to submit request. Please try again or contact us directly.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Start Your Project
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Project Request Form
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a proposal.
            The more details you provide, the better we can understand your needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Client Information */}
          <section className="bg-secondary p-8 rounded-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 7XX XXX XXX"
                  className="bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company/Organization
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="ABC Solutions"
                  className="bg-background"
                />
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="bg-secondary p-8 rounded-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Project Details
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type *
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <Textarea
                  required
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Describe your project in detail. What problem are you trying to solve? What are your goals?"
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Timeline *
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-sm text-foreground"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-secondary p-8 rounded-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Features & Requirements
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Select all features you need for your project
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <label
                  key={feature}
                  className="flex items-center gap-3 cursor-pointer p-3 bg-background rounded-sm border border-border hover:border-primary transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">{feature}</span>
                </label>
              ))}
            </div>
          </section>

          {/* File Upload & References */}
          <section className="bg-secondary p-8 rounded-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Design References & Files
            </h2>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Upload Files (Mockups, Designs, Documents)
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                {uploadingFiles ? (
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                ) : (
                  <>
                    <p className="text-sm text-foreground mb-2">
                      Drag & drop files here, or click to select
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Max 10MB per file. Supports images, PDFs, Word docs
                    </p>
                  </>
                )}
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-background rounded-sm border border-border"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-foreground truncate">{file.name}</span>
                        <span className="text-xs text-muted-foreground">({file.size}MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reference Links */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Reference Website Links
                </label>
                <Textarea
                  value={formData.referenceLinks}
                  onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
                  placeholder="Paste links to websites you like (one per line)"
                  rows={3}
                  className="bg-background resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Design Style Preference
                  </label>
                  <Input
                    value={formData.designStyle}
                    onChange={(e) => setFormData({ ...formData, designStyle: e.target.value })}
                    placeholder="e.g., Modern, Minimal, Bold"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Brand Colors (if any)
                  </label>
                  <Input
                    value={formData.brandColors}
                    onChange={(e) => setFormData({ ...formData, brandColors: e.target.value })}
                    placeholder="e.g., Blue #0066CC, White"
                    className="bg-background"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Meeting Preferences */}
          <section className="bg-secondary p-8 rounded-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Meeting & Communication
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Contact Method
                </label>
                <Input
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  placeholder="Email, Phone, WhatsApp, etc."
                  className="bg-background"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="googleMeet"
                  checked={formData.googleMeetRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, googleMeetRequest: e.target.checked })
                  }
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <label htmlFor="googleMeet" className="text-sm text-foreground cursor-pointer">
                  I would like to schedule a Google Meet call
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Meeting Times
                </label>
                <Textarea
                  value={formData.meetingTimes}
                  onChange={(e) => setFormData({ ...formData, meetingTimes: e.target.value })}
                  placeholder="e.g., Weekdays 2-5pm EAT, Flexible on weekends"
                  rows={2}
                  className="bg-background resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Notes
                </label>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any other information you'd like us to know"
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectRequestForm;
