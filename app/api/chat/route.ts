import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]?.content || ''

    // Simulate AI response based on keywords
    let response = ''

    const lowerMessage = lastMessage.toLowerCase()

    if (lowerMessage.includes('content') || lowerMessage.includes('post') || lowerMessage.includes('idea')) {
      response = `Here are some engaging content ideas for your social media:

1. **Behind-the-Scenes**: Show your team's daily work life and company culture
2. **User-Generated Content**: Share customer testimonials and success stories
3. **Educational Posts**: Create tips, how-tos, and industry insights
4. **Interactive Content**: Run polls, Q&As, and contests
5. **Trending Topics**: Leverage current events and trending hashtags

Would you like me to create specific content for any platform?`
    } else if (lowerMessage.includes('campaign')) {
      response = `Let me help you create a comprehensive campaign strategy:

**Campaign Elements:**
- Target Audience: Define demographics and interests
- Platform Selection: Choose the best channels (Instagram, Twitter, LinkedIn, TikTok)
- Content Calendar: Plan posts over 2-4 weeks
- Budget Allocation: Organic vs. paid promotion
- KPIs: Set measurable goals (reach, engagement, conversions)

**Timeline:**
Week 1: Launch and awareness
Week 2-3: Engagement and nurturing
Week 4: Conversion push and retargeting

What type of campaign are you planning?`
    } else if (lowerMessage.includes('schedule')) {
      response = `Best times to post on social media:

**Instagram**:
- Weekdays: 11 AM - 2 PM
- Best day: Wednesday

**Twitter**:
- Weekdays: 9 AM - 4 PM
- Best day: Tuesday-Wednesday

**LinkedIn**:
- Weekdays: 7-8 AM, 12 PM, 5-6 PM
- Best day: Tuesday-Thursday

**Facebook**:
- Weekdays: 1-4 PM
- Best day: Tuesday-Friday

I can help you schedule posts automatically. What content do you want to schedule?`
    } else if (lowerMessage.includes('analytics') || lowerMessage.includes('performance') || lowerMessage.includes('metrics')) {
      response = `Here's what I track for your social media performance:

**Engagement Metrics:**
- Likes, comments, shares, saves
- Engagement rate: 6.7% (Industry average: 3-5%)
- Best performing content type: Video content

**Reach & Growth:**
- Total reach: 124K this month (+18%)
- Follower growth: +3,200 new followers
- Impressions: 387K

**Conversion Metrics:**
- Click-through rate: 2.3%
- Website traffic from social: 12.4K visits
- Conversions: 348 leads generated

Would you like a detailed breakdown for a specific platform?`
    } else if (lowerMessage.includes('hashtag')) {
      response = `Here are trending hashtags for your industry:

**General Marketing:**
#DigitalMarketing #MarketingStrategy #ContentMarketing #SocialMediaMarketing #MarketingTips

**Engagement Boosters:**
#MondayMotivation #ThrowbackThursday #FridayFeeling #WeekendVibes

**Industry-Specific:**
Based on your niche, I recommend researching:
- Competitor hashtags (analyze what works)
- Branded hashtags (create your own)
- Local hashtags (target specific regions)

**Best Practices:**
- Use 5-10 hashtags per post
- Mix popular and niche hashtags
- Create a branded hashtag

What industry are you targeting?`
    } else if (lowerMessage.includes('competitor') || lowerMessage.includes('analyze')) {
      response = `I can help analyze your competitors' social media strategies:

**Analysis Areas:**
1. Content themes and frequency
2. Engagement rates and audience response
3. Posting schedule and timing
4. Hashtag strategies
5. Visual style and branding
6. Paid vs. organic content ratio

**Competitive Insights:**
- Identify content gaps and opportunities
- Benchmark your performance
- Discover winning content formats
- Find collaboration opportunities

Which competitors would you like me to analyze?`
    } else if (lowerMessage.includes('brand') || lowerMessage.includes('voice')) {
      response = `Let's establish your brand voice for social media:

**Brand Voice Elements:**
1. **Tone**: Professional, casual, humorous, inspirational?
2. **Personality**: Friendly, authoritative, playful, empathetic?
3. **Language**: Formal vs. informal, industry jargon vs. simple

**Consistency Checklist:**
✓ Visual identity (colors, fonts, logo placement)
✓ Content pillars (3-5 main topics)
✓ Messaging framework
✓ Response templates for engagement

**Example Frameworks:**
- Nike: Inspirational, motivational, empowering
- Wendy's: Witty, playful, bold
- HubSpot: Educational, helpful, professional

What personality traits represent your brand?`
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = `Hello! I'm ready to help boost your social media presence. I can assist with:

✨ Content creation and ideas
📊 Campaign strategy and planning
📅 Post scheduling and timing
📈 Analytics and performance tracking
🎯 Target audience insights
#️⃣ Hashtag research
👥 Competitor analysis

What would you like to work on today?`
    } else {
      response = `I can help you with that! As your social media marketing agent, I specialize in:

🎨 **Content Creation**: Generate engaging posts, captions, and visuals
📊 **Strategy Planning**: Develop comprehensive marketing campaigns
📅 **Scheduling**: Optimize posting times for maximum reach
📈 **Analytics**: Track and improve your performance metrics
🎯 **Audience Targeting**: Reach the right people at the right time
💡 **Trend Analysis**: Stay ahead with trending topics and hashtags

What specific aspect of social media marketing would you like to focus on?`
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { message: 'I apologize, but I encountered an error processing your request. Please try again.' },
      { status: 500 }
    )
  }
}
