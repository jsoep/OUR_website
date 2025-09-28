#!/usr/bin/env node

/**
 * Sponsor Reordering Utility
 *
 * This script automatically reorders sponsors to ensure no gaps in numbering.
 * When you set a sponsor to position 2, it will automatically push any existing
 * sponsor at position 2 to position 3, and so on.
 *
 * Usage:
 *   node scripts/reorder-sponsors.js
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const sponsorsDir = path.join(process.cwd(), 'content', 'sponsors')

function reorderSponsors() {
  console.log('🔄 Reordering sponsors...')

  if (!fs.existsSync(sponsorsDir)) {
    console.log('⚠️  Sponsors directory not found, skipping reordering')
    return
  }

  // Read all sponsor files
  const files = fs.readdirSync(sponsorsDir).filter(file => file.endsWith('.md'))
  const sponsors = []

  // Parse all sponsors
  files.forEach(filename => {
    const filePath = path.join(sponsorsDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    sponsors.push({
      filename,
      filePath,
      data,
      content,
      order: parseInt(data.order) || 999
    })
  })

  // Sort sponsors by current order, then by name
  sponsors.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order
    }
    return a.data.name.localeCompare(b.data.name)
  })

  // Reassign order numbers sequentially (1, 2, 3, ...)
  let changes = 0
  sponsors.forEach((sponsor, index) => {
    const newOrder = index + 1
    if (sponsor.order !== newOrder) {
      sponsor.data.order = newOrder
      changes++

      // Write the file back with updated order
      const newContent = matter.stringify(sponsor.content, sponsor.data)
      fs.writeFileSync(sponsor.filePath, newContent)

      console.log(`📝 Updated ${sponsor.data.name}: ${sponsor.order} → ${newOrder}`)
    }
  })

  if (changes === 0) {
    console.log('✅ Sponsors already properly ordered')
  } else {
    console.log(`✅ Reordered ${changes} sponsors`)
  }
}

// Run the reordering
try {
  reorderSponsors()
} catch (error) {
  console.error('❌ Error reordering sponsors:', error.message)
  process.exit(1)
}