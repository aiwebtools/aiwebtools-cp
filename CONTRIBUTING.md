# Contributing to AI Web Tools Directory

Thank you for your interest in contributing to the AI Web Tools Directory! We welcome submissions of AI tools and GPTs from students, developers, and the community.

## How to Submit Your AI Tool

### Option 1: Online Submission Form (Recommended)

Visit our [Tool Submission Page](/submit-tool) to submit your AI tool through our online form. Your submission will be reviewed before being added to the directory.

**What You'll Need:**
- Tool name
- Tool description (what it does and who it's for)
- Direct URL to your tool
- Tool category (e.g., Education, Productivity, Creative, etc.)
- Optional: YouTube demo video URL
- Optional: Tool image URL

### Option 2: GitHub Pull Request

If you're comfortable with Git and GitHub, you can submit a pull request:

1. Fork this repository
2. Add your tool to the appropriate data file in `src/data/`
3. Ensure your tool follows our format (see example below)
4. Create a pull request with a clear description
5. Wait for review and approval

## Submission Guidelines

### Tool Requirements

Your AI tool must:
- ✅ Be functional and publicly accessible
- ✅ Have a clear, descriptive name
- ✅ Include a detailed description (2-3 sentences minimum)
- ✅ Have a working URL
- ✅ Be appropriate for educational/professional use
- ✅ Respect intellectual property and copyright

### Tool Information Format

When submitting, please provide:

```json
{
  "name": "Your Tool Name",
  "description": "A clear description of what your tool does and how it helps users.",
  "url": "https://yourtool.lovable.app/?via=aiwebtools",
  "category": "Education",
  "videoUrl": "https://youtube.com/watch?v=...",
  "imageUrl": "https://example.com/image.png"
}
```

### Categories

Choose the most appropriate category for your tool:
- **Education** - Learning tools, tutors, study aids
- **Productivity** - Task management, automation, workflow tools
- **Creative** - Design, art, music, video creation
- **Business** - Marketing, planning, analytics
- **Developer** - Coding assistants, debugging tools
- **Research** - Data analysis, academic tools
- **Healthcare** - Medical information, wellness tools
- **Entertainment** - Games, storytelling, fun projects
- **Communication** - Writing assistants, translators
- **Other** - Tools that don't fit other categories

## Affiliate Links

If you're adding your own tool, you can include an affiliate parameter `?via=aiwebtools` in your URL. For third-party tools you're recommending, please ensure you have permission to use affiliate links.

## Review Process

1. **Submission** - Submit your tool via the form or pull request
2. **Review** - Your submission will be reviewed within 5-7 business days
3. **Feedback** - You may receive feedback or requests for changes
4. **Approval** - Once approved, your tool will be added to the directory
5. **Notification** - You'll be notified when your tool is live

## Quality Standards

We review submissions for:
- **Functionality** - Does the tool work as described?
- **Quality** - Is the tool well-made and useful?
- **Description** - Is the description clear and accurate?
- **Appropriateness** - Is the tool suitable for our directory?
- **Uniqueness** - Does it offer something valuable or different?

## Code of Conduct

By contributing, you agree to:
- Provide accurate information about your tool
- Not submit malicious, harmful, or inappropriate content
- Respect the intellectual property of others
- Accept that submissions may be edited for clarity or formatting
- Understand that the maintainers reserve the right to reject any submission

## Questions?

If you have questions about contributing, please:
- Open an issue on GitHub
- Email us at contact@ai-webtools.com
- Check our FAQ section

## License

By submitting your tool to this directory, you acknowledge that the directory itself is released under the MIT License. Your tool retains its own license, but the directory entry and description you provide will be part of this open-source project.

---

Thank you for helping make AI tools more accessible to everyone! 🚀
