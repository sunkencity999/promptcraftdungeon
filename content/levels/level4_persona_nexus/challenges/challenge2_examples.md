# Format Specification: Real-World Examples

## Example 1: Business Analysis Format

**Basic Prompt:**
```
Compare different project management methodologies.
```

**Result:** A prose-based comparison that might be difficult to scan for specific differences.

**Format-Specified Prompt:**
```
Compare the following project management methodologies (Agile, Waterfall, Lean, and Kanban) in a table format with these specific rows:
- Core philosophy in one sentence
- Best suited for (project types)
- Key advantages (3 bullet points)
- Main limitations (3 bullet points)
- Typical team structure
- Key metrics tracked
- Famous companies/projects using this methodology

After the table, include a brief recommendation section suggesting which methodology works best for: software development, construction projects, marketing campaigns, and research projects.
```

**Result:** A highly scannable, structured comparison that makes it easy to evaluate methodologies side by side, followed by contextual recommendations.

## Example 2: Technical Documentation Format

**Basic Prompt:**
```
Explain how to troubleshoot network connectivity issues.
```

**Result:** A potentially unstructured explanation that might be difficult to follow during an actual troubleshooting situation.

**Format-Specified Prompt:**
```
Create a network troubleshooting guide with the following format:

## INITIAL ASSESSMENT
- A checklist of 5 quick tests to identify the scope of the problem

## SYSTEMATIC TROUBLESHOOTING PROCESS
1. [First step]
   * What to check
   * Expected results
   * If successful: next steps
   * If unsuccessful: alternative path

2. [Second step]
   * What to check
   * Expected results
   * If successful: next steps
   * If unsuccessful: alternative path

[Continue with steps 3-5]

## COMMON ISSUES AND SOLUTIONS
- [Issue 1]: [Solution steps]
- [Issue 2]: [Solution steps]
- [Issue 3]: [Solution steps]

## WHEN TO ESCALATE
- Clear criteria for when to contact IT support
```

**Result:** A structured troubleshooting guide that can be easily followed in a logical sequence, with clear decision points and paths.

## Example 3: Educational Content Format

**Basic Prompt:**
```
Explain the causes of World War I.
```

**Result:** A potentially lengthy essay that might not effectively organize the complex factors.

**Format-Specified Prompt:**
```
Explain the causes of World War I using the following structured format:

1. TIMELINE OF KEY EVENTS (1890-1914)
   * Format each event as: [Date] - [Event] - [Significance to mounting tensions]

2. MAJOR CAUSAL FACTORS
   * For each factor, use this structure:
     - Factor name and brief description
     - Countries most influenced by this factor
     - Specific examples/incidents
     - Relative importance (primary, secondary, or contributing)

3. PERSPECTIVES BY COUNTRY
   * For each major power (Germany, Britain, France, Russia, Austria-Hungary):
     - Primary motivations and concerns
     - Key decisions that escalated tensions
     - Alternative choices that might have prevented conflict

4. HISTORIOGRAPHICAL DEBATE
   * Present 3 different historical interpretations of the primary causes
   * Format as: [Interpretation name] - [Key historians] - [Core argument] - [Supporting evidence]
```

**Result:** A comprehensive but clearly organized explanation that breaks down complex historical causality into manageable, structured sections.

## Example 4: Decision-Making Support Format

**Basic Prompt:**
```
Help me decide which CRM software to choose for my small business.
```

**Result:** A general discussion that might not facilitate clear decision-making.

**Format-Specified Prompt:**
```
Help me select a CRM system for a 15-person sales team in a B2B software company. Present your analysis in this format:

## REQUIREMENTS ANALYSIS
- Must-have features (based on my company profile)
- Nice-to-have features
- Integration requirements

## CRM COMPARISON
Create a decision matrix with these CRMs (Salesforce, HubSpot, Zoho, Pipedrive) and these factors:
- Cost structure (first year and ongoing)
- Implementation complexity (Rated 1-5)
- Feature match to requirements (Rated 1-5)
- Scalability (Rated 1-5)
- Integration capabilities (Rated 1-5)
- User-friendliness (Rated 1-5)
- Mobile capabilities (Rated 1-5)
- Customer support quality (Rated 1-5)
- Total score

## RECOMMENDATION
- Top recommendation with rationale
- Runner-up with rationale
- Implementation considerations for the recommended option
```

**Result:** A structured analysis that systematically evaluates options against requirements and provides clear recommendations with supporting rationale.

## Example 5: Health and Nutrition Format

**Basic Prompt:**
```
Give me a meal plan for weight loss.
```

**Result:** A generic meal plan that might not include important nutritional information or customization options.

**Format-Specified Prompt:**
```
Create a 7-day weight loss meal plan with the following format:

## NUTRITIONAL PARAMETERS
- Daily calorie target: 1600-1800 calories
- Macronutrient breakdown: 30% protein, 40% carbs, 30% fat
- Dietary restrictions: No dairy, minimal processed foods

## DAILY MEAL PLANS
For each day (Monday-Sunday), show:

**Day X**
- Breakfast: [Meal] - [Calories] - [Protein/Carbs/Fat] - [Prep time]
- Snack 1: [Options] - [Nutritional info]
- Lunch: [Meal] - [Calories] - [Protein/Carbs/Fat] - [Prep time]
- Snack 2: [Options] - [Nutritional info]
- Dinner: [Meal] - [Calories] - [Protein/Carbs/Fat] - [Prep time]
- Daily totals: [Calories] - [Protein/Carbs/Fat]

## SHOPPING LIST
- Organize by grocery department
- Include quantities needed for one person

## MEAL PREP TIPS
- Which components can be prepared in advance
- Storage recommendations
- Time-saving tips
```

**Result:** A comprehensive, structured meal plan with precise nutritional information, shopping guidance, and practical implementation tips.

## Example 6: Project Planning Format

**Basic Prompt:**
```
Help me plan a website redesign project.
```

**Result:** General advice that might lack the structure needed for actual project implementation.

**Format-Specified Prompt:**
```
Create a website redesign project plan with the following structure:

## PROJECT OVERVIEW
- Objectives (3-5 bullet points)
- Key stakeholders
- Success metrics

## PHASE 1: DISCOVERY & RESEARCH (Weeks 1-2)
- Tasks:
  * Task 1: [Description] - [Owner] - [Duration] - [Dependencies]
  * Task 2: [Description] - [Owner] - [Duration] - [Dependencies]
- Deliverables:
  * Deliverable 1: [Description] - [Acceptance criteria]
  * Deliverable 2: [Description] - [Acceptance criteria]
- Milestone: [Description] - [Completion criteria]

[REPEAT STRUCTURE FOR PHASES 2-5]
- Phase 2: Design (Weeks 3-5)
- Phase 3: Development (Weeks 6-9)
- Phase 4: Testing & Refinement (Weeks 10-11)
- Phase 5: Launch & Post-Launch (Weeks 12-13)

## RESOURCE REQUIREMENTS
- Team members and roles
- External vendors/services
- Tools and software

## RISK MANAGEMENT
- Potential risks in table format:
  * Risk description
  * Impact (High/Medium/Low)
  * Probability (High/Medium/Low)
  * Mitigation strategy
```

**Result:** A comprehensive project plan with clear phases, tasks, responsibilities, and risk management components that can be directly implemented.

## The Format Selection Framework

When choosing a format for your prompt, consider:

1. **Information Complexity**
   - Simple information → Lists, short tables
   - Complex information → Hierarchical structures, multi-section formats
   - Multi-faceted comparisons → Comparison tables, matrices

2. **User Need**
   - Quick reference → Bulleted lists, simple tables
   - Decision-making → Comparison matrices, pros/cons lists
   - Implementation → Step-by-step guides, checklists
   - Learning → Hierarchical explanations, Q&A formats

3. **Information Relationships**
   - Sequential relationships → Numbered steps, flowcharts
   - Categorical relationships → Grouped lists, hierarchical structures
   - Comparative relationships → Tables, side-by-side formats
   - Cause-effect relationships → If-then formats, decision trees

Remember, the most effective format isn't necessarily the most complex—it's the one that organizes information in a way that best serves your specific needs and makes the information most accessible and actionable.
