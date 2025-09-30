# Image Asset Guidelines

## Folder Structure
- `logos/` - Team logo, Oxford logo, partner logos
- `team/` - Team member photos and group photos
- `sponsors/` - Sponsor and partner logos
- `news/` - News article featured images
- Root - General site images (hero, backgrounds)

## File Guidelines
- **Team Logo**: Keep under 500KB, use SVG or PNG
- **Team Photos**: Compress to under 1MB, use WebP if possible
- **Sponsor Logos**: Vector format (SVG) preferred
- **News Images**: Compress to under 800KB

## Recommended Tools
- **Compression**: TinyPNG, ImageOptim
- **Formats**: WebP for photos, SVG for logos
- **External hosting**: Consider Cloudinary for large files

## External Hosting Setup (Recommended)
For large files or team photos, consider:
1. Cloudinary (25GB free)
2. Imgur (unlimited public images)
3. Netlify Large Media (paid)

Update CMS config when ready:
```yaml
media_library:
  name: cloudinary
  config:
    cloud_name: your_cloud_name
    api_key: your_api_key
```