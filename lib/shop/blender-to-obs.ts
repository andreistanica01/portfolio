export const OBS_PATH = "/shop/blender-to-obs"
export const OBS_BLOG_PATH = "/blog/record-blender-viewport-in-obs"
export const OBS_IMAGE = "/images/blender-to-obs/cover.webp"
export const OBS_STORE = "https://superhivemarket.com/products/blender-to-obs"
export const OBS_DOCS = "https://product-aura-media.andrei-stanica03.workers.dev/blender-to-obs/v1/documentation"
export const OBS_DESCRIPTION = "Blender to OBS is a Bevel Graphics addon that sends your working Blender viewport to OBS Studio, with output-only visibility controls and separate editor sources on Windows."
export const OBS_FAQS = [
  { question: "What problem does Blender to OBS solve?", answer: "It separates the view you need for working from the view your audience needs. On Windows, send the actual working viewport to OBS and choose which overlays and interface elements appear in the output without hiding them in your Blender workspace." },
  { question: "Does it create a second rendered viewport?", answer: "No. The Windows Vulkan path shares the actual working viewport. It does not create a second rendered viewport. This does not mean recording is free of GPU cost or that every scene will reach a particular frame rate." },
  { question: "Which Blender and OBS versions are supported?", answer: "Version 0.12.2 targets Windows x64 with Vulkan and Blender 4.5 and 5.0-5.3 families. OBS 32.1.2 was tested. Recent editor checks covered Blender 4.5.14, 5.0.1, 5.2.3 and 5.3 beta. The native bridge is experimental; compatibility varies by Blender build, GPU and driver." },
  { question: "Can I capture the Shader Editor or Timeline separately?", answer: "Yes, on Windows. Choose an already open editor or Window and add it as a separate OBS source. Each capture has its own format and framing settings. Keep captured editors visible and their Blender window restored." },
  { question: "Does Blender to OBS work on Mac?", answer: "Apple Silicon has a separate experimental preview for Blender 5.2/5.3 using a slower Metal/browser path. It does not include Windows editor capture, native interface/menu capture, screencast keys, Wireframe or Quad View. Do not assume feature parity with Windows." },
  { question: "Does the addon record automatically or replace OBS?", answer: "No. OBS remains responsible for recording, resolution, FPS and quality. Start recording in OBS after checking its preview. The addon supplies the Blender capture workflow." },
  { question: "Can I hide overlays in Wireframe?", answer: "Wireframe includes native viewport overlays. Independent overlay filtering is available in the other supported shading modes. Test the exact shading mode you plan to record." },
]
export const OBS_STEPS = [
  "Install the Windows ZIP through Blender Preferences > Add-ons > Install from Disk and enable Blender to OBS.",
  "Select Vulkan in System preferences if needed. Restart Blender normally after initial setup or a native bridge update.",
  "Close OBS normally once for first-time receiver setup. In Blender, open the N sidebar, choose OBS and click Open in OBS.",
  "Choose what to show in OBS, set the capture format and select Fit, Fill, Stretch or Manual placement.",
  "Set resolution, FPS and recording quality in OBS. Check the preview and make a short test recording before the full session.",
]
