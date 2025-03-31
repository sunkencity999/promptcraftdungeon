# Research Data Analysis Prompt Engineering Practice Exercises

## Exercise 1: Data Analysis Prompt Analysis

Analyze the following data analysis prompts and identify which elements make them effective or ineffective:

1. "Analyze my survey data."

2. "Conduct a comprehensive analysis of the attached survey dataset examining factors influencing employee retention in technology companies. The analysis should include: 1) Descriptive statistics for all variables with appropriate visualizations for distributions and key relationships, 2) Inferential analysis testing the hypothesis that work-life balance and career development opportunities are stronger predictors of retention than compensation, 3) Segmentation analysis identifying whether these relationships differ across demographic groups or job roles, 4) A predictive model estimating retention probability based on the significant factors, and 5) Recommendations for HR interventions based on the findings. For each analysis, include assumptions testing, effect size calculations, and confidence intervals where appropriate. Present results in a format accessible to HR professionals without statistical expertise while maintaining methodological rigor."

3. "Help me understand my experiment results."

4. "Analyze the results of this randomized controlled trial testing a new educational intervention in middle school mathematics. The dataset includes pre-test and post-test scores for treatment and control groups (n=120 per group), along with demographic variables, implementation fidelity measures, and student engagement metrics. The analysis should: 1) Evaluate baseline equivalence between groups and handle any imbalances appropriately, 2) Calculate the intervention's effect size with appropriate confidence intervals using both intention-to-treat and treatment-on-treated approaches, 3) Conduct moderation analyses to identify which student characteristics or implementation factors influence intervention effectiveness, 4) Perform mediation analysis to test whether improved engagement mediates the intervention effect on achievement, and 5) Address missing data using multiple imputation rather than listwise deletion. Include appropriate model diagnostics, sensitivity analyses for key decisions, and visualizations that clearly communicate findings to educational stakeholders."

5. "Look at this data and tell me what you find."

**Questions to consider:**
- Which prompts clearly define the analysis objectives and questions?
- Which prompts specify the analytical methods and approaches?
- Which prompts address assumptions, limitations, and technical considerations?
- How do the detailed prompts guide more rigorous and relevant analyses?

## Exercise 2: Analysis Objective Development

Enhance the following basic data analysis prompts by adding specific objectives, research questions, and analytical approaches:

1. "Analyze customer purchase data."

2. "Look at these clinical trial results."

3. "Examine this environmental monitoring dataset."

4. "Analyze social media engagement metrics."

5. "Evaluate these student performance scores."

**Example enhancement:**
- Basic: "Analyze sales data from our e-commerce platform."
- Enhanced: "Conduct a comprehensive analysis of our e-commerce sales data from the past 18 months to address the following specific objectives:
  1. Identify seasonal patterns and trends in overall sales volume and average order value, with statistical tests for significance of observed patterns.
  2. Determine which product categories show the strongest growth trajectories using time series decomposition and trend analysis.
  3. Analyze the relationship between marketing campaign expenditures and sales outcomes using appropriate lag analysis and ROI calculations.
  4. Develop a customer segmentation model based on purchasing behavior (recency, frequency, monetary value) and demographic characteristics.
  5. Create a predictive model to forecast sales for the next 6 months, with specific attention to upcoming holiday seasons.
  
  The analysis should include appropriate data cleaning steps, handling of outliers, testing of statistical assumptions, and validation procedures for any models developed. Results should be presented with clear visualizations suitable for executive decision-makers, along with a technical appendix detailing methodological choices and limitations."

## Exercise 3: Analytical Method Specification

For each of the following data analysis scenarios, create a prompt that requests specific analytical methods with detailed justification:

1. Analyzing longitudinal health outcomes with missing data

2. Evaluating the impact of a policy change with observational data

3. Exploring patterns in high-dimensional genomic data

4. Modeling consumer choice behavior from transaction data

5. Assessing the reliability and validity of a new measurement instrument

**Example:**
"Conduct a rigorous analysis of longitudinal health outcomes data from a 5-year cohort study tracking diabetes progression, with the following specific methodological requirements and justifications:

1. Missing Data Handling:
   - Implement multiple imputation by chained equations (MICE) rather than simpler approaches like mean imputation or listwise deletion
   - Justify this approach based on the pattern of missingness (conduct Little's MCAR test to determine if data is missing completely at random)
   - Create at least 20 imputed datasets given the approximately 30% missing data rate
   - Include sensitivity analyses comparing results across different imputation strategies to assess robustness

2. Longitudinal Modeling Approach:
   - Apply mixed-effects modeling (specifically, a growth curve modeling approach) to account for:
     * The nested structure of repeated measures within individuals
     * Individual heterogeneity in disease progression trajectories
     * Both fixed effects of predictors and random effects of individual differences
   - Justify model specification choices including:
     * Selection of fixed vs. random effects
     * Covariance structure specification
     * Handling of time as linear vs. non-linear
     * Inclusion of interaction terms with time

3. Causal Inference Considerations:
   - Implement inverse probability weighting to adjust for selection bias due to differential dropout
   - Use marginal structural models to handle time-varying confounding between treatment adherence and disease progression
   - Justify these approaches over simpler regression adjustments based on the presence of time-dependent confounding

4. Model Diagnostics and Validation:
   - Conduct and report comprehensive diagnostics including:
     * Residual analysis for normality and homoscedasticity
     * Influence diagnostics to identify outliers and high-leverage points
     * Multicollinearity assessment
   - Implement k-fold cross-validation to assess predictive accuracy and generalizability
   - Compare alternative model specifications using appropriate information criteria (AIC, BIC)

5. Effect Size and Clinical Significance:
   - Report both statistical significance and standardized effect sizes
   - Translate model coefficients into clinically meaningful metrics (e.g., risk ratios, number needed to treat)
   - Calculate minimal clinically important differences based on established literature

For each methodological decision, provide explicit justification based on the data characteristics, research questions, and statistical literature. Include code annotations and references to methodological sources where appropriate."

## Exercise 4: Data Preparation and Quality Assessment

Create prompts for data analysis that include comprehensive data preparation and quality assessment requirements:

1. Analysis of survey data with complex skip patterns and multiple scales

2. Integration and analysis of data from multiple administrative sources

3. Analysis of sensor data with potential calibration issues and outliers

4. Evaluation of text data from open-ended responses requiring coding

5. Analysis of financial transaction data with potential fraud or errors

**Example:**
"Conduct an analysis of sensor data from our industrial equipment monitoring system, with particular attention to comprehensive data preparation and quality assessment before the main analysis. The data preparation and quality assessment should include:

1. Initial Data Inventory and Documentation:
   - Create a complete data dictionary documenting each variable's characteristics (type, units, range, sampling frequency)
   - Generate summary statistics and visualizations for all variables to identify initial quality concerns
   - Map data completeness across sensors and time periods using appropriate visualizations
   - Document the sensor calibration history and maintenance records relevant to data interpretation

2. Temporal Alignment and Synchronization:
   - Assess and correct for any time drift issues across different sensor systems
   - Standardize all timestamps to a single time zone and format
   - Create a uniform time grid and address irregular sampling intervals
   - Document any system downtime periods and their potential impact on analysis

3. Sensor-Specific Quality Control:
   - Implement sensor-specific validity checks based on physical operating parameters
   - Identify readings outside of physically possible or equipment-specific ranges
   - Flag values that violate rate-of-change constraints based on the physical system
   - Detect and address sensor "sticking" (repeated identical values) and calibration drift patterns
   - Cross-validate readings across redundant sensors where available

4. Outlier Detection and Handling:
   - Apply multiple outlier detection methods appropriate for time series data (e.g., moving window, ARIMA residuals)
   - Distinguish between different outlier types (global outliers, contextual outliers, collective outliers)
   - Document decision rules for outlier classification and handling
   - Implement appropriate outlier handling strategies with justification (removal, replacement, transformation, or flagging)

5. Missing Data Assessment and Imputation:
   - Characterize patterns of missingness across sensors and time periods
   - Test for relationships between missingness and other variables or operating conditions
   - Select and justify appropriate imputation methods based on missingness patterns
   - Implement multiple imputation strategies for sensitivity analysis
   - Clearly document all imputed values in the resulting dataset

6. Feature Engineering and Transformation:
   - Create derived variables capturing system behavior (e.g., rates of change, cumulative metrics)
   - Apply appropriate transformations to address non-normality or heteroscedasticity
   - Normalize or standardize variables as required for subsequent analyses
   - Extract relevant features from high-frequency signals (e.g., spectral characteristics, statistical properties)

7. Data Quality Reporting:
   - Generate a comprehensive data quality report documenting:
     * Initial data state (completeness, range issues, anomalies)
     * All transformations and cleaning steps applied
     * Quantitative impact of each cleaning step on the dataset
     * Remaining limitations or quality concerns
     * Recommendations for future data collection improvements

The prepared dataset should be provided in both raw and processed formats, with clear documentation of all processing steps to ensure reproducibility. The quality assessment should explicitly address how data quality issues might impact subsequent analyses and what limitations should be considered when interpreting results."

## Exercise 5: Analysis for Different Audiences

Create data analysis prompts tailored to different audiences and purposes:

1. Analysis for academic publication in a peer-reviewed journal

2. Analysis for executive decision-makers in a business context

3. Analysis for policy recommendations to government stakeholders

4. Analysis for public communication and general audience understanding

5. Analysis for technical implementation by other data scientists

**Example:**
"Conduct an analysis of our customer churn data specifically designed for executive decision-makers, with the following audience-appropriate elements:

1. Executive Summary Focus:
   - Begin with a concise, jargon-free summary of key findings limited to one page
   - Prioritize actionable insights with clear business implications
   - Quantify financial impact of identified churn factors and potential interventions
   - Include no more than 3-5 main takeaways ranked by business impact

2. Strategic-Level Analysis:
   - Focus analysis on questions directly relevant to strategic decisions:
     * Which customer segments are at highest risk of churn?
     * What are the top 3-5 controllable factors driving churn?
     * How do retention rates compare across product lines and regions?
     * What is the predicted ROI of specific retention initiatives?
   - Frame all analyses in terms of business objectives rather than statistical properties
   - Connect findings explicitly to current strategic priorities and KPIs

3. Visualization and Presentation:
   - Create executive-appropriate visualizations that:
     * Communicate key patterns without requiring statistical expertise
     * Use consistent, intuitive color schemes aligned with corporate branding
     * Focus on comparative and relative metrics rather than absolute values
     * Include clear annotations highlighting key points
   - Limit to 7-10 high-impact visualizations total
   - Ensure all charts are self-explanatory with minimal text
   - Use business terminology rather than technical or statistical language

4. Actionability Emphasis:
   - Structure findings around decision points rather than data characteristics
   - Include specific, concrete recommendations for each major finding
   - Provide implementation considerations including:
     * Estimated resource requirements
     * Timeline for expected impact
     * Potential risks or limitations
     * Success metrics and measurement approach
   - Present options with clear trade-offs where appropriate

5. Appropriate Technical Detail:
   - Relegate methodological details to an appendix
   - Include only assumption violations or limitations that materially affect business decisions
   - Translate statistical concepts into business terms (e.g., "customer lifetime value impact" rather than "coefficient value")
   - Focus on predictive accuracy and business relevance rather than statistical significance
   - Address anticipated questions about data quality or methodology in business terms

6. Forward-Looking Elements:
   - Include a forward-looking section with:
     * Short-term projections of churn under different intervention scenarios
     * Recommended metrics to track for ongoing monitoring
     * Suggested follow-up analyses to address remaining questions
     * Integration points with other business initiatives

The final deliverable should be concise (maximum 15 slides or 10 pages), visually engaging, and structured to facilitate decision-making in a time-constrained executive context while maintaining analytical integrity."

## Exercise 6: Comprehensive Analysis Plan Framework

Create a comprehensive prompt template for developing a complete data analysis plan that integrates all essential components:

1. Problem definition and research questions
2. Data sources and preparation procedures
3. Analytical methods and justification
4. Validation and robustness checks
5. Interpretation framework and limitations
6. Reporting and visualization strategy

**Example:**
"# Comprehensive Data Analysis Plan Framework

Develop a complete data analysis plan using the following structured framework that addresses all essential components for a rigorous, transparent, and actionable analysis:

## 1. Problem Definition and Analytical Objectives (1-2 pages)
- Business/research context:
  * Background on the problem domain and its significance
  * Stakeholders and their information needs
  * Prior analyses or knowledge to build upon
- Primary analytical question:
  * Precise formulation of the central question
  * Definition of key concepts and variables
  * Scope boundaries and constraints
- Specific analytical objectives:
  * Hierarchical breakdown of sub-questions
  * Prioritization of objectives if resource constraints exist
  * Success criteria for the analysis
- Hypotheses and expectations:
  * Formal hypotheses if confirmatory analysis
  * Expected patterns based on domain knowledge
  * Alternative explanations to consider

## 2. Data Sources and Preparation (2-3 pages)
- Data inventory:
  * Comprehensive listing of all data sources
  * Temporal coverage and granularity
  * Known limitations or quality issues
- Data integration plan:
  * Entity resolution and record linkage approach
  * Handling of conflicting information across sources
  * Temporal alignment considerations
- Quality assessment procedures:
  * Completeness and coverage evaluation
  * Validity and accuracy checks
  * Consistency and coherence verification
- Preprocessing pipeline:
  * Data cleaning steps with decision rules
  * Feature engineering and transformation approach
  * Handling of missing values and outliers
  * Variable encoding and normalization methods
- Final dataset specifications:
  * Structure and format of analysis-ready data
  * Unit of analysis and aggregation levels
  * Data partitioning approach (training/validation/testing)

## 3. Analytical Methods and Implementation (3-4 pages)
- Method selection and justification:
  * Primary analytical approaches with rationale
  * Alternatives considered and why not selected
  * Alignment with research questions and data characteristics
- Detailed methodological specifications:
  * Model formulations and parameterization
  * Algorithm selection and configuration
  * Software implementation details
- Analytical workflow:
  * Sequential analysis steps with dependencies
  * Iterative refinement process if applicable
  * Computational requirements and constraints
- Parameter selection and optimization:
  * Hyperparameter tuning approach
  * Cross-validation strategy
  * Model selection criteria
- Implementation details:
  * Software and package versions
  * Computational environment
  * Reproducibility considerations

## 4. Validation Strategy and Quality Assurance (2-3 pages)
- Assumption verification:
  * Tests for statistical assumptions
  * Diagnostics for model adequacy
  * Handling of assumption violations
- Robustness assessment:
  * Sensitivity analyses for key decisions
  * Alternative specifications testing
  * Subgroup analysis for heterogeneity
- Uncertainty quantification:
  * Confidence intervals or credible intervals
  * Bootstrapping or simulation approaches
  * Propagation of uncertainty through analysis pipeline
- Validation procedures:
  * Out-of-sample validation approach
  * Performance metrics with justification
  * Benchmarking against alternatives
- Quality control process:
  * Code review procedures
  * Reproducibility verification
  * Results validation protocols

## 5. Interpretation Framework (1-2 pages)
- Effect size interpretation:
  * Contextual benchmarks for magnitude assessment
  * Practical significance thresholds
  * Translation to domain-relevant metrics
- Causal interpretation boundaries:
  * Explicit statements about causal claims
  * Potential confounding factors
  * Alternative explanations to consider
- Generalizability assessment:
  * Population and context limitations
  * External validity considerations
  * Conditions for applicability of findings
- Integration with existing knowledge:
  * Comparison with prior findings
  * Theoretical implications
  * Reconciliation of contradictions
- Known limitations:
  * Data limitations and their implications
  * Methodological constraints
  * Unaddressed questions

## 6. Reporting and Deliverables (1-2 pages)
- Audience-specific reporting strategy:
  * Tailored deliverables for different stakeholders
  * Technical vs. non-technical communication approach
  * Interactive vs. static presentation decisions
- Visualization plan:
  * Key visualizations mapped to findings
  * Design principles and standards
  * Tools and implementation approach
- Documentation requirements:
  * Code documentation standards
  * Analytical decisions registry
  * Technical appendices content
- Knowledge transfer approach:
  * Presentation format and structure
  * Supporting materials and resources
  * Follow-up support process
- Timeline and milestones:
  * Analysis execution schedule
  * Review and validation points
  * Delivery dates for interim and final products

The plan should demonstrate methodological rigor while remaining feasible within project constraints. All components should be internally consistent, with clear alignment between the problem definition, methods, validation approach, and deliverables. The plan should explicitly address potential challenges and include contingency approaches where appropriate."
