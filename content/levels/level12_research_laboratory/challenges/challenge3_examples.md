# Data Analysis Prompt Examples

## Basic Data Analysis Prompts

### Example 1: Simple Statistical Analysis

**Prompt:**
```
As a data analyst, analyze the relationship between hours of study time and exam scores for a class of 50 students. Include descriptive statistics and determine if there is a significant correlation.
```

**Why it works:**
- Defines the role (data analyst)
- Specifies the variables to analyze (study time and exam scores)
- Identifies the sample (50 students)
- Requests specific analyses (descriptive statistics, correlation)
- Asks for significance assessment

### Example 2: Structured Comparative Analysis

**Prompt:**
```
As a research analyst, compare the effectiveness of three different marketing strategies based on customer conversion rates. Your analysis should include:
1. Descriptive statistics for each strategy
2. Visualization of the results
3. Statistical testing to determine if differences are significant
4. Recommendations based on the findings

The dataset includes conversion rates for 500 customers randomly assigned to each strategy.
```

**Why it works:**
- Specifies the role (research analyst)
- Defines a clear comparison task (three marketing strategies)
- Provides a structured format with numbered elements
- Requests specific analytical components
- Specifies the dataset characteristics
- Asks for actionable recommendations
- Includes visualization requirement

## Intermediate Data Analysis Prompts

### Example 3: Comprehensive Experimental Data Analysis

**Prompt:**
```
As a biostatistician, develop a comprehensive analysis plan for a randomized controlled trial testing a new drug for hypertension. The study includes 300 patients (150 treatment, 150 placebo) with blood pressure measurements taken at baseline, 1 month, 3 months, and 6 months. Additional variables include age, sex, BMI, comorbidities, and medication adherence.

Your analysis plan should include:

1. Data Preparation and Screening:
   - Approach for handling missing data
   - Outlier detection and management strategy
   - Verification of randomization balance
   - Assessment of data distributions and transformations if needed

2. Descriptive Analysis:
   - Summary statistics for baseline characteristics by treatment group
   - Visualization of blood pressure trends over time
   - Patterns of medication adherence
   - Dropout rates and patterns

3. Primary Outcome Analysis:
   - Statistical model for comparing treatment effects on blood pressure
   - Handling of repeated measures
   - Covariate adjustment strategy
   - Effect size calculation and interpretation

4. Secondary Analyses:
   - Subgroup analyses for pre-specified groups
   - Medication adherence effects on outcomes
   - Safety outcomes analysis
   - Exploratory analyses of treatment effect modifiers

5. Sensitivity Analyses:
   - Impact of missing data handling approaches
   - Per-protocol vs. intention-to-treat comparisons
   - Robustness to statistical model specifications

Include specific statistical tests, models, and visualization approaches for each component, with justification for your choices. Address potential limitations and how they might affect interpretation.
```

**Why it works:**
- Specifies specialized role (biostatistician)
- Provides detailed context (RCT for hypertension)
- Specifies sample size and study design
- Creates comprehensive structure with main sections and subsections
- Requests specific analytical approaches for each component
- Includes data preparation and quality assessment
- Requires sensitivity analyses
- Asks for justification of analytical choices
- Addresses interpretation limitations

### Example 4: Mixed Methods Data Integration

**Prompt:**
```
As a social science methodologist, create an integrated analysis plan for a mixed methods study examining teacher burnout and retention. The study collected the following data:

Quantitative Data:
- Survey responses from 500 teachers measuring burnout (Maslach Burnout Inventory), job satisfaction, and intention to leave
- Administrative data on teacher absences, performance evaluations, and actual turnover over 2 years
- School-level data on student demographics, achievement, and climate surveys

Qualitative Data:
- 40 in-depth interviews with teachers representing high and low burnout scores
- 10 focus groups with school administrators
- Open-ended survey responses about coping strategies and support needs

Your integrated analysis plan should include:

1. Quantitative Analysis Approach:
   - Data cleaning and preparation procedures
   - Multilevel modeling strategy for nested data (teachers within schools)
   - Longitudinal analysis of burnout trajectories
   - Predictive modeling of teacher turnover
   - Psychometric analysis of measurement instruments

2. Qualitative Analysis Approach:
   - Coding framework development process
   - Thematic analysis methodology
   - Approach for ensuring coding reliability
   - Strategy for identifying patterns and divergent cases
   - Framework for organizing findings

3. Integration Strategy:
   - Points of integration during analysis (not just at interpretation)
   - Methods for comparing quantitative patterns with qualitative themes
   - Joint displays or matrices to visualize integrated findings
   - Approach for addressing contradictory findings
   - Weighting of different data sources in conclusions

4. Quality and Rigor Considerations:
   - Strategies for ensuring validity/trustworthiness
   - Reflexivity in qualitative interpretation
   - Triangulation approach across data sources
   - Member checking or other validation procedures

The analysis should leverage the strengths of both methodological approaches while producing coherent, integrated insights about teacher burnout and retention.
```

**Why it works:**
- Specifies specialized role (social science methodologist)
- Addresses complex mixed methods design
- Provides detailed context about available data
- Creates comprehensive structure for both quantitative and qualitative approaches
- Requires specific integration strategies
- Addresses methodological rigor for both approaches
- Includes handling of contradictory findings
- Requires coherent insights across methods
- Balances technical analysis with practical interpretation

## Advanced Data Analysis Prompts

### Example 5: Causal Inference Analysis

**Prompt:**
```
As a causal inference specialist, design a comprehensive analytical strategy to estimate the causal effect of a job training program on long-term employment outcomes using observational data. The dataset includes 5,000 individuals (1,200 program participants, 3,800 non-participants) with detailed pre-program characteristics, program participation details, and five years of post-program employment and earnings data.

Your causal inference analysis plan should include:

1. Causal Framework and Assumptions:
   - Formal definition of the causal estimand(s) of interest
   - Directed acyclic graph (DAG) representing the assumed causal structure
   - Explicit statement of identifiability assumptions
   - Assessment strategy for potential assumption violations
   - Approach for sensitivity analysis to unobserved confounding

2. Data Preparation for Causal Analysis:
   - Confounder selection strategy based on causal knowledge
   - Approach for creating balanced comparison groups
   - Handling of missing data with attention to missing data mechanisms
   - Creation of appropriate longitudinal structures for time-varying treatments
   - Assessment of positivity/overlap in treatment assignment

3. Primary Estimation Approaches:
   - Propensity score methods (specify exact implementation: matching, weighting, stratification)
   - Outcome regression modeling approach
   - Doubly-robust estimation strategy
   - Implementation of g-methods for time-varying treatments if applicable
   - Instrumental variable approach if valid instruments are available

4. Heterogeneous Treatment Effect Analysis:
   - Strategy for identifying treatment effect modifiers
   - Approach for estimating conditional average treatment effects
   - Causal machine learning methods for heterogeneous effect discovery
   - Validation approach for heterogeneous effect findings
   - Interpretation framework for effect heterogeneity

5. Longitudinal Effects Analysis:
   - Approach for estimating dynamic treatment effects over time
   - Methodology for addressing time-varying confounding
   - Strategy for distinguishing short vs. long-term program effects
   - Handling of post-treatment mediating variables
   - Survival analysis for time-to-employment outcomes

6. Robustness and Validation:
   - Negative control outcome analysis
   - Placebo tests and falsification strategies
   - Comparison of estimates across multiple methods
   - Quantitative bias analysis for key threats to validity
   - Benchmarking against experimental estimates if available

7. Interpretation and Communication:
   - Framework for distinguishing between statistical and causal findings
   - Approach for communicating uncertainty in causal estimates
   - Strategy for translating findings into policy implications
   - Transparent reporting of assumptions and limitations
   - Visualization of causal effects and mechanisms

For each component, specify the exact methodological approach, implementation details, and how results will be interpreted in terms of causal (not merely associational) relationships.
```

**Why it works:**
- Specifies highly specialized role (causal inference specialist)
- Addresses complex causal estimation problem
- Provides detailed context about available data
- Creates comprehensive structure with sophisticated causal methods
- Requires formal definition of causal quantities
- Includes multiple complementary estimation approaches
- Addresses heterogeneous and dynamic treatment effects
- Requires robustness checks specific to causal inference
- Distinguishes between statistical and causal interpretation
- Balances methodological rigor with policy relevance

### Example 6: Predictive Modeling and Machine Learning Pipeline

**Prompt:**
```
As a machine learning scientist, design an end-to-end predictive modeling pipeline to identify patients at high risk of hospital readmission within 30 days of discharge. The dataset includes electronic health records for 50,000 hospital admissions with patient demographics, diagnoses, procedures, medications, lab values, vital signs, prior utilization, and social determinants of health. The model will be deployed to support clinical decision-making for discharge planning.

Your comprehensive predictive modeling plan should include:

1. Problem Formulation and Evaluation Framework:
   - Precise definition of the prediction target and time horizon
   - Clinically relevant performance metrics beyond AUC/accuracy
   - Evaluation strategy accounting for class imbalance
   - Framework for assessing algorithmic fairness across demographic groups
   - Approach for establishing clinical utility thresholds

2. Data Engineering and Feature Development:
   - Strategy for handling the temporal nature of EHR data
   - Approach for creating clinically meaningful features
   - Method for addressing missing data in predictive context
   - Techniques for handling high-cardinality categorical variables
   - Feature selection methodology with clinical validity consideration

3. Model Development Strategy:
   - Candidate algorithms with justification (including interpretable and black-box)
   - Hyperparameter optimization approach
   - Ensemble method design if applicable
   - Calibration procedures for reliable probability estimates
   - Computational efficiency considerations for deployment

4. Validation and Testing Framework:
   - Data splitting strategy preserving temporal relationships
   - Cross-validation approach appropriate for healthcare data
   - Evaluation of model stability across patient subpopulations
   - Performance assessment under dataset shift scenarios
   - External validation strategy if additional data sources available

5. Interpretability and Explainability:
   - Methods for global model interpretation
   - Approach for generating patient-specific explanations
   - Techniques for identifying key predictive factors
   - Strategy for detecting and addressing spurious correlations
   - Framework for clinician-intelligible risk factor communication

6. Fairness and Bias Mitigation:
   - Comprehensive bias assessment across protected groups
   - Pre-processing, in-processing, and post-processing bias mitigation
   - Approach for balancing performance and fairness objectives
   - Strategy for identifying and addressing health disparities
   - Monitoring plan for detecting emergent biases

7. Implementation and Deployment Considerations:
   - Model updating and retraining strategy
   - Approach for monitoring model performance over time
   - Integration plan with clinical workflows
   - Procedures for capturing feedback from clinical users
   - Strategy for measuring real-world impact on patient outcomes

For each component, specify concrete methodological choices, implementation details, and how they address the specific challenges of healthcare predictive modeling for clinical decision support.
```

**Why it works:**
- Specifies highly specialized role (machine learning scientist)
- Addresses complex healthcare prediction problem
- Provides detailed context about available data
- Creates comprehensive structure with end-to-end pipeline
- Balances technical modeling with clinical relevance
- Includes fairness and bias considerations
- Addresses interpretability for clinical context
- Requires validation appropriate for healthcare
- Includes deployment and implementation planning
- Focuses on real-world impact beyond model performance

## Common Mistakes and Improvements

### Weak Prompt:
```
Analyze this dataset about customer satisfaction.
```

**Problems:**
- No specified role
- Extremely vague task ("analyze")
- No details about the dataset
- No specific analytical questions
- No required elements or approaches
- No context about purpose or audience

### Improved Prompt:
```
As a customer analytics specialist, develop a comprehensive analysis plan for a dataset containing customer satisfaction survey responses (n=2,500) from a retail company. The dataset includes overall satisfaction scores (1-10), ratings on specific aspects of the shopping experience, purchase history, customer demographics, and free-text comments.

Your analysis plan should include:
1. Data preparation approach, including handling of missing values and text data processing
2. Descriptive analysis of satisfaction scores across customer segments and store locations
3. Statistical modeling to identify the key drivers of overall satisfaction
4. Trend analysis comparing current results to previous quarters
5. Text analysis of customer comments to identify themes not captured in structured questions
6. Visualization strategy for communicating findings to executive leadership

The analysis should prioritize actionable insights that can guide specific improvements to the customer experience, with particular attention to identifying at-risk customer segments and high-impact improvement opportunities.
```

**Improvements:**
- Added specific role (customer analytics specialist)
- Provided dataset details (survey responses, sample size)
- Specified variables available in the dataset
- Created structured requirements for analysis components
- Included both quantitative and qualitative analysis
- Added trend analysis for temporal context
- Specified audience (executive leadership)
- Focused on actionable insights and business impact
- Included visualization requirements
