# Data Visualization Prompt Examples

## Basic Data Visualization Prompts

### Example 1: Simple Chart Creation

**Prompt:**
```
As a data visualization specialist, create a bar chart showing monthly sales performance for the past year. Include clear labels, a title that communicates the main trend, and use color to highlight months that exceeded targets.
```

**Why it works:**
- Defines the role (data visualization specialist)
- Specifies the chart type (bar chart)
- Provides data context (monthly sales, past year)
- Includes formatting requirements (labels, title)
- Adds insight highlighting (color for months exceeding targets)

### Example 2: Multi-Chart Dashboard

**Prompt:**
```
As a business analyst, create a sales performance dashboard with four visualizations:
1. A line chart showing monthly revenue trends over the past 2 years
2. A bar chart comparing sales by product category
3. A map visualization showing regional performance
4. A scatter plot showing the relationship between marketing spend and sales

Use a consistent color scheme throughout, include appropriate titles and labels for each chart, and add brief annotations highlighting key insights from each visualization.
```

**Why it works:**
- Specifies the role (business analyst)
- Clearly defines multiple chart types for different purposes
- Provides specific data relationships to visualize
- Includes design requirements (consistent color scheme, titles, labels)
- Requests explanatory elements (annotations for key insights)

## Intermediate Data Visualization Prompts

### Example 3: Audience-Specific Visualization

**Prompt:**
```
As a data visualization expert, create a set of visualizations about customer churn for two different audiences:

For executives:
- A single-page dashboard with 3-4 high-level KPIs
- A simple trend visualization showing churn rate over time
- A comparison of churn across major customer segments
- Use minimal text, focus on clear headlines that communicate key insights

For the customer retention team:
- A detailed dashboard showing churn drivers and patterns
- Visualizations showing the correlation between customer behaviors and churn
- Segment-specific visualizations highlighting unique patterns
- Include more detailed annotations and actionable insights

For both sets, use the company's brand colors (blue #1A5276, gray #85929E, accent orange #E67E22), ensure all visualizations are colorblind-friendly, and include a brief methodology note.
```

**Why it works:**
- Specifies the role (data visualization expert)
- Tailors visualizations to different audiences with specific needs
- Provides clear structure for each audience's requirements
- Includes specific design requirements (brand colors with hex codes)
- Addresses accessibility (colorblind-friendly)
- Requests contextual information (methodology note)

### Example 4: Narrative-Driven Visualization

**Prompt:**
```
As a data storyteller, create a visual narrative explaining the impact of our customer loyalty program. Design a sequence of 5-7 visualizations that tell a cohesive story, starting with the business problem, showing the program implementation, and demonstrating results.

For each visualization:
- Include a clear headline that states the key insight
- Use appropriate chart types for the specific data relationships
- Add annotations highlighting important patterns or outliers
- Ensure visual consistency across the sequence

The narrative should flow logically, with each visualization building on the previous one. Include transition text between visualizations to maintain the narrative thread. Conclude with a summary visualization that reinforces the main message about program effectiveness.
```

**Why it works:**
- Defines the role (data storyteller)
- Specifies a narrative structure with clear progression
- Provides guidance for each visualization component
- Requests connective elements (transition text)
- Emphasizes narrative coherence and conclusion

## Advanced Data Visualization Prompts

### Example 5: Interactive Dashboard Design

**Prompt:**
```
As a business intelligence specialist, design an interactive sales performance dashboard for our sales directors that balances comprehensive data access with clarity and ease of use.

The dashboard should include:

Core visualizations:
- YTD sales performance vs. targets (gauge or bullet chart)
- Monthly trend with forecast line and confidence interval
- Performance by product category (horizontal bar, sorted by value)
- Geographic performance (choropleth map with sales territory boundaries)
- Sales funnel conversion rates by stage

Interactive features:
- Time period selector (YTD, QTD, MTD, custom range)
- Product category and region filters
- Drill-down capability from categories to individual products
- Hover tooltips with detailed metrics
- Anomaly highlighting that activates when values exceed 2 standard deviations

Design specifications:
- Follow corporate style guide with primary blue (#0066CC), secondary green (#00AA55)
- Ensure all charts are colorblind-friendly
- Use consistent formatting for currency and percentages
- Include a help section explaining dashboard functionality
- Optimize layout for both desktop and tablet viewing

The dashboard should enable directors to quickly identify areas requiring attention while providing sufficient detail for root cause analysis without requiring additional reports.
```

**Why it works:**
- Specifies the role (business intelligence specialist)
- Defines clear audience and purpose
- Provides detailed specifications for visualizations
- Includes interactive elements with specific functionality
- Addresses technical requirements (style guide, accessibility)
- Sets clear user experience goals

### Example 6: Comparative Analysis Visualization

**Prompt:**
```
As a data visualization consultant, create a comprehensive set of visualizations comparing our company's performance against competitors and industry benchmarks. The analysis should cover the past 3 years of quarterly data and include:

Market position analysis:
- Market share visualization showing our position relative to top 5 competitors
- Trend comparison showing growth rates against industry average
- Quadrant chart positioning companies by revenue and profit margin

Product portfolio comparison:
- Heatmap showing our product categories vs. competitor offerings
- Performance comparison across shared product categories
- Innovation index visualization comparing new product success rates

Customer perception metrics:
- Radar chart comparing brand attributes against key competitors
- Sentiment analysis visualization from social media data
- NPS score comparison with trend lines

Design requirements:
- Use a consistent visual language across all comparisons
- Employ a neutral color palette that doesn't bias toward any company
- Use annotations to highlight key competitive insights
- Include small multiples where appropriate for time-series comparisons
- Add context through appropriate benchmarks and reference lines

The visualizations should enable objective assessment of our competitive position while highlighting specific areas of advantage and opportunity. Include a one-page executive summary visualization that integrates the key findings from all comparison areas.
```

**Why it works:**
- Specifies the role (data visualization consultant)
- Provides comprehensive structure for comparative analysis
- Specifies appropriate chart types for different comparison types
- Includes detailed design requirements
- Requests integration of findings (executive summary)

### Example 7: Exploratory Data Visualization

**Prompt:**
```
As a data scientist, create an exploratory data visualization suite for our customer transaction dataset that enables analysts to discover patterns and generate hypotheses. The suite should include:

Distribution visualizations:
- Purchase amount distribution with appropriate statistical overlays
- Customer frequency distribution with segmentation markers
- Temporal patterns across multiple time scales (hour, day, month, year)

Relationship visualizations:
- Correlation matrix of key customer metrics with visual encoding of strength
- Scatter plot matrix of purchase behaviors with regression lines
- Network diagram showing product purchase associations

Segmentation visualizations:
- Clustering visualization showing customer segments in feature space
- Parallel coordinates plot for comparing segment characteristics
- Radar charts comparing behavior patterns across segments

Interactive capabilities:
- Brushing and linking between related visualizations
- Dynamic filtering by customer attributes and time periods
- Outlier highlighting with contextual information
- Ability to save and annotate interesting patterns

The visualization suite should balance statistical rigor with accessibility for business analysts, including appropriate statistical annotations and explanatory text where needed. Include a guided analysis path for new users while allowing for open-ended exploration by experienced analysts.
```

**Why it works:**
- Specifies the role (data scientist)
- Provides comprehensive structure for exploratory analysis
- Balances statistical rigor with business accessibility
- Includes interactive capabilities for exploration
- Considers different user experience levels

## Specialized Data Visualization Prompts

### Example 8: Anomaly and Outlier Visualization

**Prompt:**
```
As a fraud detection analyst, create visualizations specifically designed to identify and investigate anomalous patterns in our transaction data. The visualizations should:

1. Highlight statistical outliers using:
   - Box plots with outlier points clearly marked
   - Distribution plots with anomaly thresholds indicated
   - Time series with anomaly detection bands

2. Provide context for each anomaly through:
   - Comparative visualizations showing "normal" vs. "anomalous" patterns
   - Historical context showing similar past anomalies
   - Related metric visualizations to identify potential causes

3. Enable investigation through:
   - Drill-down capabilities from aggregate anomalies to specific instances
   - Timeline visualizations of events surrounding anomalies
   - Relationship visualizations connecting anomalies to entities

Design the visualizations with a neutral color palette that shifts to alert colors (amber, red) only for confirmed anomalies, avoiding bias in initial analysis. Include confidence measures for each identified anomaly and ensure all visualizations support both automated detection and human pattern recognition.
```

**Why it works:**
- Specifies the role (fraud detection analyst)
- Focuses on a specialized visualization need (anomaly detection)
- Provides structured approach to anomaly visualization
- Includes contextual elements for investigation
- Addresses potential bias in visual design

### Example 9: Predictive Model Visualization

**Prompt:**
```
As a machine learning engineer, create visualizations that explain our customer churn prediction model to business stakeholders with limited technical knowledge. The visualizations should:

Model performance visualizations:
- ROC curve with clear explanation of what it represents
- Confusion matrix visualized as a proportional grid with business impact
- Precision-recall tradeoff visualization with current operating point

Feature importance visualizations:
- Horizontal bar chart of top 15 features with relative importance
- Partial dependence plots for top 5 features showing relationship to churn probability
- Feature interaction heatmap for most significant interactions

Prediction explanation visualizations:
- Individual customer prediction explanation showing feature contributions
- Customer segment visualization showing churn probability distribution
- "What-if" visualization showing how changing customer attributes affects churn probability

Design the visualizations to progressively disclose technical details, with high-level insights immediately visible and more technical details available on demand. Use consistent, intuitive visual metaphors throughout, and include brief explanatory text with each visualization that connects the technical concepts to business implications.
```

**Why it works:**
- Specifies the role (machine learning engineer)
- Addresses the challenge of explaining technical concepts
- Provides structured approach to model visualization
- Includes progressive disclosure for different expertise levels
- Connects technical elements to business implications

### Example 10: Time Series and Trend Visualization

**Prompt:**
```
As a business analyst, create a comprehensive set of time series visualizations for our e-commerce metrics that reveal patterns across multiple time scales and highlight significant trends. The visualizations should include:

Multi-scale trend analysis:
- Daily, weekly, monthly, and quarterly views of key metrics
- Year-over-year comparison with seasonal pattern highlighting
- Decomposition visualization separating trend, seasonality, and noise

Pattern identification:
- Anomaly detection with contextual explanation
- Changepoint visualization identifying significant shifts in trends
- Cyclical pattern visualization with period identification

Forecasting and projection:
- Trend projection with confidence intervals
- Seasonal forecast with historical accuracy indicators
- "What-if" scenario visualization for key business drivers

Design considerations:
- Use consistent scales and alignment to enable direct comparison
- Implement appropriate smoothing to highlight signal over noise
- Include reference lines for significant events and interventions
- Provide context through benchmarks and historical references
- Enable toggling between absolute values and growth rates

The visualizations should help stakeholders distinguish between random fluctuations and meaningful changes, with clear visual hierarchy guiding attention to the most significant patterns and trends.
```

**Why it works:**
- Specifies the role (business analyst)
- Focuses on specialized visualization need (time series analysis)
- Addresses multiple time scales and pattern types
- Includes forecasting and projection elements
- Provides specific design guidance for time series clarity
