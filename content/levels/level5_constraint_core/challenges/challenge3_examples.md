# Combining Constraints with Other Techniques: Real-World Examples

## Example 1: Business Strategy Development

**Basic Prompt:**
```
Help me create a marketing plan.
```

**Result:** A generic marketing plan without specific expertise or boundaries.

**Combined Techniques Prompt:**
```
[PERSONA]
As a digital marketing strategist who specializes in helping small B2B software companies with limited budgets,

[TASK]
develop a 90-day marketing plan for launching our new project management tool.

[FORMAT]
Structure your plan with the following sections:
- Executive Summary (3-5 bullet points)
- Target Audience Definition
- Key Messaging and Positioning
- Channel Strategy (organized by priority)
- Content Calendar (key milestones only)
- Budget Allocation (percentage breakdown)
- Success Metrics

[PARAMETERS]
Our total marketing budget is $15,000, and we have a team of 3 people with basic marketing skills but no specialized expertise.

[CONSTRAINTS]
- Don't include strategies that rely heavily on paid advertising
- Avoid approaches that would require hiring specialized contractors
- Don't recommend tactics that take more than 10 hours per week to maintain
- Refrain from suggesting complex marketing technology implementations
- Exclude strategies focused on social media platforms other than LinkedIn
```

**Result:** A highly tailored marketing plan that combines expert perspective with practical constraints, organized in a useful format and calibrated to specific parameters.

## Example 2: Technical Documentation

**Basic Prompt:**
```
Write documentation for our API.
```

**Result:** Generic API documentation without specific structure or boundaries.

**Combined Techniques Prompt:**
```
[PERSONA]
As a technical documentation specialist who focuses on making APIs accessible to developers with varying experience levels,

[TASK]
create comprehensive documentation for our payment processing API.

[FORMAT]
Structure the documentation with these sections:
1. Overview and Key Concepts
2. Authentication and Security
3. Endpoint Reference
   - For each endpoint include: URL, Method, Request Parameters, Response Format, Error Codes
4. Code Examples
5. Rate Limits and Performance Considerations
6. Troubleshooting Guide

[PARAMETERS]
The documentation should be appropriate for developers with intermediate experience and some familiarity with RESTful APIs.

[CONSTRAINTS]
- Don't include implementation details about our internal systems
- Avoid using technical jargon without clear definitions
- Don't provide example code that could create security vulnerabilities
- Refrain from mentioning unreleased features or endpoints
- Exclude information about deprecated endpoints
- Don't make assumptions about the developer's programming language
```

**Result:** Well-structured, security-conscious API documentation that provides the right level of detail for the target audience while avoiding potential issues.

## Example 3: Educational Content Creation

**Basic Prompt:**
```
Create a lesson about climate change.
```

**Result:** A generic lesson without age-appropriate considerations or specific educational approach.

**Combined Techniques Prompt:**
```
[PERSONA]
As an environmental science educator who specializes in teaching complex topics to middle school students (ages 11-13),

[TASK]
create a lesson plan about climate change that focuses on understanding the basic science and exploring potential solutions.

[FORMAT]
Structure your lesson plan with:
- Learning Objectives (3-5 specific outcomes)
- Vocabulary List with grade-appropriate definitions
- Engagement Activity (10 minutes)
- Main Content Presentation (15 minutes)
- Interactive Activity (15 minutes)
- Assessment Strategy
- Extension Resources

[PARAMETERS]
The lesson should be completable in a 50-minute class period, align with Next Generation Science Standards, and be suitable for a diverse classroom with varying science backgrounds.

[CONSTRAINTS]
- Don't use scientific terminology without providing simple explanations
- Avoid political framing or partisan perspectives
- Don't include activities that require expensive materials or technology
- Refrain from using fear-based messaging or apocalyptic scenarios
- Don't present the topic in a way that could make students feel hopeless
- Exclude content that requires significant prior knowledge about atmospheric science
```

**Result:** An age-appropriate, scientifically accurate, and engaging lesson plan that balances educational objectives with important content boundaries.

## Example 4: Product Design Feedback

**Basic Prompt:**
```
Give me feedback on my product design.
```

**Result:** Generic design feedback without specific expertise or structured evaluation.

**Combined Techniques Prompt:**
```
[PERSONA]
As a senior UX designer with 15 years of experience in e-commerce mobile applications,

[TASK]
evaluate the attached checkout flow design for our mobile shopping app and provide constructive feedback.

[FORMAT]
Organize your evaluation in these sections:
1. Initial Impression (2-3 sentences)
2. Usability Strengths (bullet points with brief explanations)
3. Areas for Improvement
   * Critical Issues (must address)
   * Secondary Issues (should address)
   * Minor Refinements (could address)
4. Specific Recommendations
   * For each issue identified, provide:
     - Current design element
     - Suggested change
     - Rationale based on UX principles
     - Expected user impact
5. Implementation Prioritization

[PARAMETERS]
Focus your evaluation on usability, conversion optimization, and accessibility for users across age ranges.

[CONSTRAINTS]
- Don't suggest changes that would require a complete redesign of the flow
- Avoid recommendations that would significantly increase development time
- Don't focus on visual design elements like color schemes or typography
- Refrain from making assumptions about user preferences without evidence
- Don't recommend adding features that aren't directly related to completing a purchase
```

**Result:** Expert-level, structured design feedback that focuses on practical improvements within specific constraints.

## Example 5: Content Marketing Strategy

**Basic Prompt:**
```
Help me with content marketing.
```

**Result:** Generic content marketing advice without specific strategy or boundaries.

**Combined Techniques Prompt:**
```
[PERSONA]
As a content marketing strategist who specializes in helping B2B technology companies establish thought leadership,

[TASK]
develop a quarterly content strategy for our cybersecurity software company that will position us as industry experts and generate qualified leads.

[FORMAT]
Present your strategy with these components:
- Content Pillars (3-5 core themes)
- Content Mix Table
  | Content Type | Frequency | Purpose | Distribution Channels | Success Metrics |
  |--------------|-----------|---------|----------------------|-----------------|
  | [Type]       | [Freq]    | [Purpose] | [Channels]         | [Metrics]       |
- Editorial Calendar Framework (not specific dates, but content flow)
- Resource Requirements
- Lead Generation Approach
- Measurement Framework

[PARAMETERS]
We have a small marketing team (2 people) with limited writing resources but can allocate $5,000 per quarter to content production and promotion.

[CONSTRAINTS]
- Don't suggest content types that require specialized production skills (video editing, graphic design)
- Avoid strategies that depend heavily on paid promotion
- Don't recommend approaches that require more than 2 new content pieces per week
- Refrain from suggesting tactics that take more than 30 days to show initial results
- Exclude strategies focused on social platforms other than LinkedIn and Twitter
- Don't include approaches that require significant subject matter expert time (more than 2 hours per week)
```

**Result:** A practical, resource-conscious content strategy that leverages thought leadership within specific business constraints.

## Example 6: Software Development Approach

**Basic Prompt:**
```
Help me plan my software project.
```

**Result:** Generic project planning advice without specific methodology or constraints.

**Combined Techniques Prompt:**
```
[PERSONA]
As an agile project manager with expertise in small to medium-sized software development teams,

[TASK]
create a development approach for our customer portal redesign project that balances quality, speed, and resource constraints.

[FORMAT]
Structure your recommendation with:
1. Project Organization
   - Team structure
   - Roles and responsibilities
   - Communication framework
2. Development Methodology
   - Sprint/iteration structure
   - Key ceremonies and their purpose
   - Artifact management
3. Implementation Roadmap
   - Phasing strategy
   - Major milestones
   - Dependency management
4. Quality Assurance Approach
5. Risk Management Framework

[PARAMETERS]
We have a team of 5 developers with varying experience levels, 1 designer, and 1 QA specialist. The project needs to be completed within 4 months.

[CONSTRAINTS]
- Don't suggest methodologies that require specialized tools beyond Jira and Slack
- Avoid approaches that would require more than 15% of time spent in meetings
- Don't recommend practices that need specialized agile training
- Refrain from suggesting team structures that require hiring additional personnel
- Don't include strategies that would delay delivering any user-facing value until the end of the project
- Exclude approaches that require significant overtime or weekend work
```

**Result:** A practical, tailored project management approach that leverages agile principles within specific team and organizational constraints.

## Example 7: Health and Wellness Plan

**Basic Prompt:**
```
Create a fitness plan for me.
```

**Result:** A generic fitness plan without specific expertise or important limitations.

**Combined Techniques Prompt:**
```
[PERSONA]
As a certified fitness trainer who specializes in working with busy professionals over 40,

[TASK]
design a 12-week fitness program focused on increasing strength and energy levels while accommodating a busy schedule.

[FORMAT]
Structure the program with:
- Overall Goals and Progression Strategy
- Weekly Schedule Overview
- Workout Details
  | Day | Focus | Exercises | Sets/Reps | Time Required | Intensity |
  |-----|-------|-----------|-----------|--------------|-----------|
  | [Day] | [Focus] | [Exercises] | [Sets/Reps] | [Time] | [Intensity] |
- Recovery and Nutrition Guidelines
- Progress Tracking Method
- Adaptation Strategies (if goals aren't being met)

[PARAMETERS]
The plan should require no more than 4 hours of exercise per week, be doable with minimal equipment (dumbbells, resistance bands, and a stability ball), and be appropriate for someone with basic fitness experience but no specialized training.

[CONSTRAINTS]
- Don't include exercises that put significant strain on the knees or lower back
- Avoid recommending specific supplements or restrictive diets
- Don't suggest workouts that take more than 45 minutes to complete
- Refrain from including exercises that require a spotter or specialized gym equipment
- Don't create a plan that requires working out more than 5 days per week
- Exclude high-impact plyometric movements
```

**Result:** A safe, effective, and practical fitness program that respects time limitations and physical considerations while leveraging professional expertise.

## The Integration Framework

When combining constraints with other prompt engineering techniques, consider this framework:

1. **Purpose Alignment**
   - Ensure each technique serves your overall goal
   - Check that constraints don't undermine the purpose of other techniques
   - Verify that the combination creates a coherent direction

2. **Technique Sequencing**
   - Consider which technique should take precedence
   - Structure your prompt to establish the most important elements first
   - Create logical flow between different techniques

3. **Constraint Prioritization**
   - Identify which constraints are absolute vs. preferred
   - Focus on constraints that address the most likely problems
   - Limit the number of constraints to avoid overcomplication

4. **Clarity and Organization**
   - Use clear sections or labels for different techniques
   - Ensure constraints are unambiguous and specific
   - Check that the overall prompt remains coherent and readable

Remember, the most effective combinations don't just stack techniques—they integrate them in ways where each enhances the others. The goal is to create a unified prompt where persona, format, parameters, and constraints work together harmoniously to produce exactly the response you need.
