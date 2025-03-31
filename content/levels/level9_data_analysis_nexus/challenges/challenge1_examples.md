# Data Exploration Prompt Examples

## Basic Data Exploration Prompts

### Example 1: Simple Dataset Overview

**Prompt:**
```
As a data analyst, provide a basic exploratory analysis of a retail sales dataset. Include summary statistics for numerical columns, frequency counts for categorical variables, and identify any missing values.
```

**Why it works:**
- Defines the role (data analyst)
- Specifies the data context (retail sales)
- Requests specific analyses (summary statistics, frequency counts)
- Includes data quality check (missing values)

### Example 2: Structured Exploration with Visualizations

**Prompt:**
```
As a data scientist, explore a customer demographics dataset by:
1. Summarizing the basic properties of each variable (type, range, central tendency)
2. Visualizing the distribution of age, income, and purchase frequency
3. Identifying outliers in numerical variables
4. Checking for missing or inconsistent data
5. Presenting findings in a structured format with clear section headings

Include appropriate visualizations for distributions and explain any notable patterns.
```

**Why it works:**
- Specifies the role (data scientist)
- Defines the data context (customer demographics)
- Provides a structured approach with numbered steps
- Requests specific analyses and visualizations
- Includes data quality checks (outliers, missing data)
- Specifies format requirements (structured with headings)

## Intermediate Data Exploration Prompts

### Example 3: Comprehensive Dataset Analysis

**Prompt:**
```
As a statistical analyst, perform a comprehensive exploratory data analysis on a healthcare dataset containing patient information, treatment records, and outcomes. Your exploration should include:

1. Data Overview:
   - Summarize dataset dimensions and variable types
   - Identify primary keys and relationships between tables
   - Assess data completeness and quality

2. Univariate Analysis:
   - Generate descriptive statistics for all numerical variables
   - Create frequency distributions for categorical variables
   - Visualize distributions using appropriate charts (histograms, box plots, bar charts)
   - Test numerical variables for normality

3. Bivariate Analysis:
   - Compute correlation matrix for numerical variables
   - Examine relationships between key variables and patient outcomes
   - Create cross-tabulations for categorical relationships
   - Visualize relationships using scatter plots, grouped box plots, etc.

4. Temporal Patterns:
   - Analyze trends in admissions, treatments, and outcomes over time
   - Identify seasonal patterns or cyclical behaviors

5. Data Quality Assessment:
   - Quantify missing values by variable and patient groups
   - Identify outliers and assess their impact
   - Check for inconsistencies or impossible values

Present your findings in a structured report with clear sections, appropriate visualizations, and concise explanations of key insights. Highlight any patterns that might be clinically relevant.
```

**Why it works:**
- Specifies specialized role (statistical analyst)
- Defines specific data context (healthcare dataset)
- Provides detailed structure with main sections and subsections
- Requests specific analytical techniques for each section
- Specifies appropriate visualization types
- Includes comprehensive data quality assessment
- Requires structured presentation with explanations
- Adds domain-specific focus (clinically relevant patterns)

### Example 4: Relationship-Focused Exploration

**Prompt:**
```
As a data analyst, explore the relationships within a marketing campaign dataset containing customer attributes, campaign interactions, and conversion outcomes. Focus your exploration on:

1. Customer Segmentation Analysis:
   - Identify natural groupings in customer attributes
   - Compare campaign response rates across different segments
   - Visualize segment differences using appropriate charts

2. Campaign Effectiveness:
   - Analyze conversion rates by campaign type, channel, and timing
   - Identify which customer attributes correlate most strongly with conversion
   - Examine the customer journey through multiple campaign touches

3. Temporal Factors:
   - Analyze time-of-day and day-of-week patterns in campaign engagement
   - Identify lag times between campaign exposure and conversion
   - Examine seasonal trends in campaign effectiveness

4. Data Quality and Limitations:
   - Assess potential selection bias in the dataset
   - Identify any tracking or attribution issues
   - Evaluate consistency of measurement across campaigns

Present your findings with clear visualizations that highlight relationships, using appropriate statistical measures to quantify the strength of observed patterns. Structure your analysis to separate correlation from potential causation, and highlight areas where further analysis might be valuable.
```

**Why it works:**
- Specifies the role (data analyst)
- Defines specific data context (marketing campaign dataset)
- Focuses on relationships rather than just descriptions
- Organizes exploration by analytical themes
- Requests specific relationship analyses
- Includes data quality assessment focused on biases
- Requires appropriate statistical measures
- Adds analytical sophistication (correlation vs. causation)

## Advanced Data Exploration Prompts

### Example 5: Multi-Method Exploration

**Prompt:**
```
As a senior data scientist, conduct an advanced exploratory analysis of a financial transaction dataset containing 5 years of customer banking activities, investment decisions, and financial outcomes. Apply multiple analytical methods to uncover patterns and insights:

1. Statistical Exploration:
   - Generate robust statistical summaries resistant to outliers
   - Apply appropriate transformations for skewed variables
   - Conduct parametric and non-parametric tests to compare customer segments
   - Identify statistically significant differences in behavior across demographics

2. Dimensionality Analysis:
   - Apply PCA or factor analysis to identify underlying dimensions of financial behavior
   - Visualize data in reduced dimensional space to identify clusters
   - Interpret principal components in terms of original variables

3. Temporal Pattern Analysis:
   - Decompose time series into trend, seasonal, and residual components
   - Identify cyclical patterns in investment behavior
   - Analyze event-triggered changes in financial activity
   - Examine autocorrelation in transaction behaviors

4. Network/Relationship Analysis:
   - Identify patterns of transfers between accounts or customers
   - Analyze co-occurrence of financial products
   - Visualize relationship networks with appropriate graph techniques

5. Anomaly Detection:
   - Apply multiple methods to identify outliers (statistical, distance-based, density-based)
   - Distinguish between errors, fraudulent activity, and legitimate unusual behavior
   - Quantify the impact of anomalies on aggregate statistics

For each method, provide:
- Justification for the approach based on data properties
- Clear visualizations with appropriate techniques for the patterns being explored
- Statistical validation of observed patterns
- Potential business implications of findings
- Limitations of the analysis and potential biases

Structure the exploration to build from basic understanding to complex insights, maintaining a narrative thread that connects different analytical approaches.
```

**Why it works:**
- Specifies senior specialized role
- Provides rich data context with timespan
- Requests multiple advanced analytical methods
- Organizes by methodological approach
- Requires justification for analytical choices
- Specifies validation requirements
- Requests business context for findings
- Adds meta-structure (narrative progression)

### Example 6: Hypothesis-Generating Exploration

**Prompt:**
```
As a research data scientist, perform an exploratory data analysis on an e-commerce dataset with the explicit goal of generating testable hypotheses for future research. The dataset contains user browsing behavior, purchase history, product details, and customer service interactions.

Your exploration should:

1. Begin with an open-ended investigation:
   - Identify unexpected patterns, relationships, or anomalies
   - Look for heterogeneity in relationships across different segments
   - Examine non-linear relationships and interaction effects

2. Apply multiple perspectives:
   - Customer lifecycle perspective (acquisition, engagement, retention)
   - Product-centered analysis (attributes, categories, pricing strategies)
   - Temporal perspective (time-of-day, seasonality, trend analysis)
   - Behavioral sequence analysis (browsing patterns leading to conversion)

3. For each interesting pattern discovered:
   - Quantify the strength and reliability of the pattern
   - Formulate a specific, testable hypothesis
   - Identify what additional data might be needed to test it
   - Suggest an appropriate research design or analytical approach

4. Address methodological considerations:
   - Identify potential confounding variables in observed relationships
   - Assess selection biases and their impact on pattern interpretation
   - Distinguish between patterns that suggest correlation versus causation
   - Evaluate alternative explanations for observed phenomena

Present your exploration as a research narrative that progresses from data understanding to hypothesis generation, with clear visualizations that highlight key patterns. For each generated hypothesis, provide a concise statement, supporting evidence from the exploration, and a proposed testing methodology.

The final output should include at least 5-7 novel, specific hypotheses that could drive future research and business strategy.
```

**Why it works:**
- Specifies research-oriented role
- Defines clear purpose (hypothesis generation)
- Provides rich data context
- Structures exploration by analytical approach
- Requires multiple analytical perspectives
- Specifies detailed requirements for each finding
- Includes methodological rigor
- Requires specific deliverable (5-7 hypotheses)
- Adds research narrative structure

## Common Mistakes and Improvements

### Weak Prompt:
```
Analyze this dataset and tell me what you find.
```

**Problems:**
- No specified role
- No data context provided
- No specific analyses requested
- No output format specified
- No quality requirements
- Completely open-ended without direction

### Improved Prompt:
```
As a data analyst, perform an exploratory data analysis on this customer churn dataset from a telecommunications company. The dataset contains customer demographics, service subscriptions, usage patterns, and whether they churned in the last month.

Your exploration should include:
1. A summary of the dataset structure, including variable types and basic counts
2. Descriptive statistics for all numerical variables (mean, median, range, standard deviation)
3. Frequency distributions for categorical variables
4. Analysis of the distribution of continuous variables with appropriate visualizations
5. Exploration of relationships between key variables and churn status
6. Identification of potential predictors of churn based on correlation or association
7. Assessment of data quality issues including missing values, outliers, and inconsistencies

Present your findings in a structured format with clear section headings, appropriate visualizations for each analysis type, and brief interpretations of what each result means for understanding customer churn. Highlight any particularly strong relationships or surprising findings that warrant further investigation.
```

**Improvements:**
- Added specific role (data analyst)
- Defined data context (customer churn dataset)
- Provided domain information (telecommunications)
- Listed specific analyses to perform
- Requested specific statistical measures
- Added relationship analysis focus
- Included data quality assessment
- Specified structured output format
- Required interpretations of findings
- Added business context (understanding churn)
