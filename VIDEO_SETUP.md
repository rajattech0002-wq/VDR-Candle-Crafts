# Hero Section Video Background Setup

## Quick Setup Guide

The hero section is now ready for a background video! Here's how to add yours:

### Step 1: Prepare Your Video

- **Format**: MP4 (h.264 codec) - most compatible
- **Resolution**: 1920x1080px (or higher)
- **Duration**: 10-30 seconds (recommended for looping)
- **File Size**: 5-15MB (for good performance)
- **Content Ideas**:
  - Flickering candles
  - Wax pouring process
  - Candle lighting
  - Smooth candle close-ups
  - Ambient candle scenes

### Step 2: Add Video to Project

1. Save your video file as `hero-video.mp4`
2. Place it in the `images/` folder:
   ```
   VDR Candle Crafts/
   └── images/
       ├── logo.jpg
       └── hero-video.mp4  ← Your video here
   ```

### Step 3: Done!

The video will automatically:
- Play in the background of the hero section
- Loop continuously
- Mute automatically for better UX
- Display with a purple overlay to maintain text readability
- Fallback to purple gradient if video doesn't load

## Video Features

```html
<video class="hero-video" autoplay muted loop>
    <source src="images/hero-video.mp4" type="video/mp4">
</video>
```

- **autoplay**: Starts playing when page loads
- **muted**: Plays without sound (required for autoplay)
- **loop**: Repeats continuously

## Styling Details

```css
.hero-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Covers entire area without distortion */
}

.hero-overlay {
    background: rgba(124, 58, 237, 0.7);  /* Purple tint */
}
```

## Browser Compatibility

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Mobile browsers: Mostly supported (some autoplay restrictions)

## Performance Tips

1. **Optimize video size**: Use ffmpeg to reduce file size
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
   ```

2. **Use WebM format** for smaller file sizes (add as fallback):
   ```html
   <video>
       <source src="images/hero-video.webm" type="video/webm">
       <source src="images/hero-video.mp4" type="video/mp4">
   </video>
   ```

3. **Lazy loading**: Video loads only when needed for mobile optimization

## Troubleshooting

**Video not playing?**
- Check file is in `images/hero-video.mp4`
- Verify video format is MP4 with h.264 codec
- Check browser console for errors

**Video looks distorted?**
- Ensure video aspect ratio matches your display
- Use 16:9 aspect ratio for best results

**Video not looping?**
- Verify `loop` attribute is present
- Check video file is not corrupted

**Still need help?**
Check the video is accessible at: `your-domain/images/hero-video.mp4`
