# Automation Prompt Engineering Practice Exercises

## Exercise 1: Automation Prompt Analysis

Analyze the following automation prompts and identify which elements make them effective or ineffective:

1. "Write a bash script for me."

2. "Create a bash script that monitors system resources on a Linux server and sends an alert when thresholds are exceeded. The script should: 1) Collect CPU usage, memory utilization, disk space, and load average metrics every 5 minutes, 2) Compare these values against configurable thresholds (CPU > 80%, memory > 90%, disk > 85%, load average > number of cores), 3) Log all measurements to a rotating log file with timestamps, 4) Send an email alert with specific details when any threshold is exceeded, and 5) Include a summary of the last 3 hours of measurements in the alert. The script should be well-commented, include error handling for failed commands, and be designed to run as a cron job."

3. "Help me automate file backups."

4. "Develop a PowerShell script that automates the process of onboarding new users in an Active Directory environment. The script should: 1) Take input parameters for the user's full name, department, manager, and job title, 2) Generate a username based on our naming convention (first initial + last name), 3) Create the AD user account with appropriate security groups based on department, 4) Set a random initial password and force change at first login, 5) Create a home directory with proper permissions, 6) Generate and send a welcome email to the manager with the new user's details, and 7) Log all actions to a central log file for auditing. Include proper error handling, parameter validation, and clear documentation for each function."

5. "Make a script to clean up files."

**Questions to consider:**
- Which prompts clearly define the automation requirements and objectives?
- Which prompts specify the expected inputs, outputs, and error handling?
- Which prompts provide context about the environment and constraints?
- How do the detailed prompts guide more effective automation solutions?

## Exercise 2: Automation Requirements Development

Enhance the following basic automation prompts by adding specific requirements, input/output specifications, error handling needs, and environmental context:

1. "Create a script to process log files."

2. "Help me automate database backups."

3. "Write a script for user account management."

4. "Automate report generation from our data."

5. "Create a deployment automation script."

**Example enhancement:**
- Basic: "Write a script to sync files between directories."
- Enhanced: "Create a Python script that synchronizes files between a source and destination directory with the following requirements:
  1. The script should accept command-line arguments for source directory, destination directory, and optional flags for recursive syncing and deletion of files in destination that no longer exist in source
  2. It should compare files based on both size and modification timestamp to determine if syncing is needed
  3. The script should create a detailed log file recording all actions (files copied, skipped, or deleted) with timestamps
  4. Include proper error handling for scenarios such as: permission issues, disk space limitations, network interruptions (if directories are on network shares), and invalid paths
  5. Add a dry-run option that shows what would happen without making actual changes
  6. Include a summary report at the end showing: total files processed, number of files copied, number of files skipped, number of errors, and total data transferred
  7. The script will run on Linux servers with Python 3.8+ and should not require non-standard libraries
  8. Performance is important as it may need to handle directories with 100,000+ files

Include appropriate documentation, logging, and progress indicators for when it's running on large directories."

## Exercise 3: Automation Scenario Specification

For each of the following automation scenarios, create a prompt that provides comprehensive requirements and context:

1. Server health monitoring and alerting system

2. Automated security patch management process

3. Multi-environment application deployment pipeline

4. User access review and cleanup automation

5. System configuration compliance checking and reporting

**Example:**
"Create a comprehensive PowerShell automation script for conducting regular user access reviews across our Windows-based systems and applications. The automation should:

1. Scope and Data Collection:
   - Query Active Directory to identify all user accounts and their group memberships
   - Connect to our SQL Server database containing application access rights
   - Pull login history from both AD and application logs for the last 90 days
   - Identify accounts with privileged access (admin rights, sensitive data access)

2. Analysis Requirements:
   - Flag accounts that have been inactive for more than 60 days
   - Identify users with access rights inconsistent with their current department/role
   - Detect potential segregation of duties violations based on our predefined conflict matrix
   - Highlight orphaned accounts (users who have left the company but still have active accounts)
   - Calculate risk scores for each account based on privilege level and activity patterns

3. Reporting Functionality:
   - Generate department-specific reports for each manager showing their team members' access
   - Create an executive summary report with key metrics and highest risk issues
   - Produce detailed technical reports for IT administrators with specific remediation actions
   - Export all findings to both CSV format for data processing and PDF for distribution
   - Include trend analysis comparing current results to previous review cycles

4. Workflow Integration:
   - Send automated emails to department managers with their reports and a link to approve/request changes
   - Track response status and send reminders for pending reviews after 7 days
   - Create ServiceNow tickets automatically for approved access changes
   - Update a compliance tracking database with review completion status

5. Technical Requirements:
   - Script should be parameterized to run against different environments (dev, test, prod)
   - Include detailed logging of all operations for audit purposes
   - Implement error handling with appropriate notifications for failed connections
   - Use secure credential management (no hardcoded passwords)
   - Design for performance optimization when processing large datasets (our AD has ~5000 users)

6. Security Considerations:
   - The script itself should run with least privilege necessary
   - All reports containing sensitive access data should be encrypted
   - Implement appropriate data handling for personally identifiable information

Include proper documentation, including prerequisites, configuration options, and examples of how to schedule and execute the script in our environment."

## Exercise 4: Multi-Platform Automation

Create automation prompts for scenarios that require working across multiple platforms or technologies:

1. Cross-platform (Windows/Linux) file processing and synchronization

2. Hybrid cloud (on-premise and cloud) resource management

3. Multi-database (SQL and NoSQL) data migration and validation

4. Cross-application workflow automation (e.g., CRM to ERP to ticketing system)

5. DevOps pipeline spanning multiple tools and environments

**Example:**
"Develop an automation solution for our hybrid cloud environment that manages resource scaling across both our on-premises VMware infrastructure and AWS cloud platform. The automation should:

1. Monitoring Component:
   - Collect performance metrics from VMware vCenter (CPU, memory, storage utilization)
   - Gather equivalent metrics from AWS CloudWatch for EC2 instances and related services
   - Monitor application-specific metrics from our Prometheus/Grafana stack
   - Track current resource costs and usage against budgeted amounts

2. Analysis and Decision Logic:
   - Evaluate resource utilization trends against predefined thresholds
   - Apply different scaling rules based on application tier (web, application, database)
   - Consider time-based patterns (business hours vs. off-hours, seasonal variations)
   - Factor in cost differentials between on-prem and cloud resources
   - Implement predictive scaling based on historical patterns where appropriate

3. Action Capabilities:
   - For on-premises resources: Ability to provision new VMs, adjust resource allocation, or migrate workloads using VMware APIs
   - For AWS resources: Scale EC2 instances (up/down), modify Auto Scaling groups, adjust RDS capacity
   - Maintain application affinity requirements (components that must scale together)
   - Ensure database connections and load balancer configurations are updated appropriately
   - Implement proper startup/shutdown sequences for dependent services

4. Cross-Platform Integration:
   - Maintain a unified inventory database of all resources regardless of platform
   - Implement consistent tagging strategy across environments for tracking and billing
   - Ensure network connectivity and security group/firewall consistency during scaling events
   - Provide a single interface/API for other systems to request resources regardless of target platform

5. Operational Requirements:
   - Detailed logging of all decisions and actions to a centralized logging system
   - Notification system for both automatic actions and approval requests for changes exceeding thresholds
   - Self-healing capabilities for common failure scenarios
   - Ability to operate in recommendation-only mode for initial deployment
   - Comprehensive reporting on resource utilization, scaling actions, and cost implications

6. Technical Specifications:
   - Core automation should be written in Python to leverage existing libraries
   - Use infrastructure-as-code principles with Terraform for provisioning
   - Implement appropriate authentication and security measures for API access
   - Design for modularity to allow easy addition of other cloud platforms in future
   - Include comprehensive documentation and monitoring dashboards

The solution should minimize manual intervention while maintaining appropriate guardrails for cost control and stability."

## Exercise 5: Automation Testing and Validation

Create prompts for automation solutions that include comprehensive testing and validation requirements:

1. Critical financial data processing automation

2. Production deployment automation for a high-availability service

3. User data migration automation with integrity requirements

4. Compliance reporting automation with audit requirements

5. Infrastructure configuration automation with security implications

**Example:**
"Create an automation solution for processing sensitive financial transaction data from multiple sources into our central accounting system. The solution must include comprehensive testing and validation components to ensure data integrity and accuracy. Requirements include:

1. Core Functionality:
   - Import transaction data from three sources: bank API (JSON), payment processor (CSV), and legacy system (XML)
   - Transform and normalize data into a standardized format for our accounting system
   - Apply business rules for transaction categorization and reconciliation
   - Generate exception reports for transactions that fail validation
   - Load approved transactions into the accounting database

2. Validation Framework Requirements:
   - Implement checksums/hashing to verify complete data transfer from sources
   - Validate all incoming data against JSON schema/XSD/field specifications
   - Perform mathematical validation (e.g., batch totals match sum of individual transactions)
   - Apply business rule validation (e.g., transaction codes match allowed values)
   - Implement double-entry accounting validation (debits equal credits)
   - Perform historical pattern analysis to flag statistical anomalies

3. Testing Requirements:
   - Create a comprehensive test suite with the following components:
     - Unit tests for each transformation and validation function
     - Integration tests for end-to-end processing flows
     - Performance tests to verify processing time for typical and peak volumes
     - Failure mode tests that simulate various error conditions
     - Regression tests to run after any code changes
   - Test data requirements:
     - Sanitized copies of production data for realistic testing
     - Synthetic edge cases to test boundary conditions
     - Deliberately malformed data to test error handling
     - Historical datasets to verify consistency with previous processing

4. Audit and Compliance Features:
   - Maintain immutable logs of all processing actions
   - Record before/after states for all data transformations
   - Implement version control for all business rules and transformation logic
   - Generate audit trail reports mapping source transactions to final accounting entries
   - Include reconciliation reports comparing source system totals to processed totals

5. Operational Safeguards:
   - Implement a staging/approval workflow for transactions above certain thresholds
   - Add circuit-breaker logic to halt processing if error rates exceed configurable thresholds
   - Create rollback capabilities for all database changes
   - Include notification system for validation failures and processing issues
   - Develop dashboard for real-time monitoring of processing status and validation metrics

6. Technical Specifications:
   - Solution should be implemented in a language with strong typing and data validation libraries
   - All sensitive data must be encrypted in transit and at rest
   - Processing must be idempotent (repeated runs with same input produce same result)
   - Include detailed documentation of all validation rules and test scenarios

The solution will be subject to financial audit and must meet SOX compliance requirements for financial data processing."

## Exercise 6: Automation Documentation Framework

Create a comprehensive prompt template for automation documentation that covers all essential aspects of a solution:

1. Purpose and scope
2. Architecture and components
3. Installation and configuration
4. Usage and examples
5. Maintenance and troubleshooting
6. Security considerations

**Example:**
"# Automation Documentation Framework Request

I need comprehensive documentation for an automation solution that follows this structured framework:

## 1. Executive Summary
- Purpose: Clear statement of what the automation does and the problem it solves
- Business Value: Quantifiable benefits (time saved, error reduction, etc.)
- Scope: What's included and explicitly what's not included
- Stakeholders: Who owns, uses, and maintains the automation

## 2. Architecture Overview
- System Diagram: Visual representation of components and data flow
- Components: Description of each major component and its function
- Dependencies: External systems, APIs, libraries, and services required
- Technical Stack: Languages, frameworks, and platforms used
- Data Flow: How information moves through the system

## 3. Installation Guide
- Prerequisites: System requirements, accounts, permissions needed
- Environment Preparation: Steps to prepare the target environment
- Installation Procedure: Step-by-step installation instructions
- Configuration: All configurable parameters with descriptions and default values
- Validation: How to verify successful installation

## 4. User Guide
- Access Instructions: How to access or execute the automation
- Input Requirements: Required and optional inputs with formats and examples
- Execution Options: Different modes or parameters available
- Output Explanation: Description of all outputs and their interpretation
- Example Workflows: Common use case examples with expected results

## 5. Administrative Guide
- Monitoring: How to monitor the automation's health and performance
- Logging: Log file locations, formats, and retention policies
- Backup/Recovery: Procedures for backing up and restoring
- Scaling: Guidelines for handling increased load
- Updating: Process for applying updates or modifications

## 6. Troubleshooting
- Common Issues: Table of frequently encountered problems and solutions
- Error Messages: Complete list of error messages with explanations
- Diagnostic Procedures: Step-by-step troubleshooting workflows
- Support Escalation: Process and contacts for escalating issues
- Health Checks: How to verify system is functioning correctly

## 7. Security Considerations
- Authentication: How access control is implemented
- Data Protection: How sensitive data is handled and protected
- Vulnerability Management: Known vulnerabilities and mitigations
- Compliance: Relevant compliance considerations
- Security Testing: Results of security assessments

## 8. Development and Customization
- Code Organization: Structure and organization of the codebase
- Customization Points: Areas designed for extension or modification
- Development Environment: How to set up a development environment
- Testing Framework: How to run and extend the test suite
- Contribution Guidelines: Process for submitting changes or enhancements

## 9. Appendices
- Glossary: Definitions of domain-specific terms
- Reference Data: Tables, codes, or other reference information
- Version History: Record of major changes between versions
- Related Documentation: Links to related systems or documentation

The documentation should be written for multiple audiences (technical implementers, end users, administrators) with appropriate detail for each section. Include screenshots, code examples, and diagrams where they add clarity. All example commands should be copy-paste ready and tested for accuracy."
