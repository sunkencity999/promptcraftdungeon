# Technical Documentation Prompt Examples

## Basic Documentation Prompts

### Example 1: Simple Installation Guide

**Prompt:**
```
As a technical writer, create a step-by-step guide for installing MySQL on Ubuntu 20.04. Include system requirements and verification steps.
```

**Why it works:**
- Defines the role (technical writer)
- Specifies the document type (step-by-step guide)
- Identifies the subject (MySQL installation)
- Specifies the platform (Ubuntu 20.04)
- Requests specific elements (requirements, verification)

### Example 2: Structured Configuration Reference

**Prompt:**
```
As a system documentation specialist, create a reference document for Apache web server configuration files. Include:
1. The location of main configuration files
2. The purpose of each configuration directive
3. Common settings with examples
4. How to test and apply configuration changes

Format the document with clear headings, code examples, and a table of contents.
```

**Why it works:**
- Specifies the role (system documentation specialist)
- Defines the document type (reference document)
- Identifies the subject (Apache configuration)
- Provides a structured approach with numbered elements
- Specifies formatting requirements
- Includes practical elements (testing, applying changes)

## Intermediate Documentation Prompts

### Example 3: Comprehensive Administration Manual

**Prompt:**
```
As a technical documentation engineer, create a comprehensive administration manual for a PostgreSQL database server in a production environment. The manual should be structured for both new database administrators who need guidance and experienced DBAs who need reference information.

The documentation should include:

1. System Architecture:
   - Server specifications and requirements
   - High-availability configuration
   - Backup infrastructure
   - Network topology and security controls

2. Installation and Setup:
   - Step-by-step installation procedures for Ubuntu and RHEL
   - Initial configuration best practices
   - Security hardening measures
   - Integration with monitoring systems

3. Day-to-Day Administration:
   - Routine maintenance tasks with scheduling recommendations
   - Performance monitoring procedures
   - User and permission management
   - Query optimization techniques

4. Troubleshooting:
   - Diagnostic procedures for common issues
   - Log analysis techniques
   - Performance bottleneck identification
   - Recovery procedures for different failure scenarios

5. Reference:
   - Configuration parameter glossary with recommended values
   - Command reference with examples
   - Common SQL queries for administrative tasks
   - Backup and restore syntax options

Use clear, concise language with appropriate technical depth. Include command examples, configuration file snippets, and expected output where relevant. Add notes and warnings for critical operations that could impact system availability. Format the document with consistent headings, tables for reference information, and diagrams for complex concepts.
```

**Why it works:**
- Specifies specialized role (technical documentation engineer)
- Defines comprehensive document type (administration manual)
- Identifies specific environment (production PostgreSQL)
- Specifies multiple audience types with different needs
- Creates detailed structure with main sections and subsections
- Balances procedural and reference content
- Includes multiple platforms (Ubuntu, RHEL)
- Specifies formatting and presentation requirements
- Requests appropriate technical depth and warnings

### Example 4: User-Focused Technical Guide

**Prompt:**
```
As a documentation specialist, create a technical guide for system administrators who need to deploy and manage a containerized application using Docker and Docker Compose. The audience has experience with Linux systems but may be new to containerization.

Your documentation should:

1. Introduction and Prerequisites:
   - Explain containerization concepts briefly but comprehensively
   - List exact prerequisites (software versions, system requirements)
   - Include a deployment architecture diagram
   - Clarify the scope and purpose of the application

2. Installation Procedures:
   - Provide distinct installation paths for development and production
   - Include all commands with explanations of key options
   - Show expected output and verification steps
   - Address common installation errors with solutions

3. Configuration Guide:
   - Document all configuration files with annotated examples
   - Explain environment variables and their impact
   - Provide configuration templates for different scenarios
   - Include security considerations for each configuration option

4. Operational Procedures:
   - Detail startup, shutdown, and restart procedures
   - Explain logging and monitoring approaches
   - Document backup and restore processes
   - Include scaling and update procedures

5. Troubleshooting:
   - Create a troubleshooting decision tree
   - Document common error messages and their resolution
   - Include diagnostic commands and how to interpret their output
   - Provide performance tuning guidance

Format the guide with progressive disclosure, starting with basic concepts and gradually introducing more complex topics. Use callout boxes for important notes, warnings, and tips. Include a quick-start section for experienced users who need only essential information. Ensure all code blocks are copyable and properly formatted.
```

**Why it works:**
- Specifies role (documentation specialist)
- Defines audience with specific experience level
- Identifies technologies (Docker, Docker Compose)
- Creates comprehensive structure with logical sections
- Balances conceptual explanations with practical procedures
- Includes both basic and advanced information
- Specifies formatting approach (progressive disclosure)
- Requests specific elements like decision trees and callouts
- Considers different user journeys (quick-start vs. detailed)

## Advanced Documentation Prompts

### Example 5: Enterprise System Documentation Suite

**Prompt:**
```
As a senior technical documentation architect, create a comprehensive documentation suite for an enterprise Kubernetes platform that serves multiple internal development teams. The platform includes Kubernetes clusters, CI/CD pipelines, monitoring systems, and security controls. The documentation will be used by platform administrators, application developers, and operations teams.

Design a modular documentation structure with the following components:

1. Platform Overview (All Audiences):
   - Architecture diagrams at infrastructure, platform, and service levels
   - Component relationships and dependencies
   - Governance model and support procedures
   - Glossary of platform-specific terminology
   - Quick-reference guides for common cross-role tasks

2. Administrator Documentation (Platform Team):
   - Infrastructure provisioning and scaling procedures
   - Cluster management and upgrade processes
   - Security controls and compliance maintenance
   - Performance tuning and optimization
   - Disaster recovery procedures with RTO/RPO specifications
   - Incident response playbooks for critical failures

3. Developer Documentation (Application Teams):
   - Onboarding procedures for new applications
   - Resource request and quota management
   - CI/CD pipeline integration guidelines
   - Application deployment patterns with examples
   - Local development environment setup
   - Testing and validation procedures

4. Operations Documentation (SRE/Ops Teams):
   - Monitoring and alerting configuration
   - Log aggregation and analysis procedures
   - Capacity planning methodologies
   - Performance benchmarking standards
   - On-call procedures and escalation paths
   - Change management processes

For each section, include:
- Conceptual overviews that explain "why" before "how"
- Procedural instructions with complete command examples
- Configuration templates with inline documentation
- Decision trees for complex processes
- Troubleshooting guides organized by symptom
- Version-specific information clearly marked

Implement cross-referencing between related topics across different sections. Use consistent terminology throughout all documents. Include validation steps after each significant procedure. Design the documentation to be maintainable as the platform evolves, with clear indicators of which team is responsible for maintaining each section.
```

**Why it works:**
- Specifies highly specialized role (senior technical documentation architect)
- Addresses complex enterprise platform with multiple components
- Identifies diverse audience groups with different needs
- Creates comprehensive modular structure
- Includes both high-level and detailed documentation
- Specifies multiple documentation types (procedures, references, etc.)
- Requires cross-referencing and consistency
- Addresses documentation maintenance
- Balances technical depth with usability

### Example 6: Multi-Environment System Documentation

**Prompt:**
```
As an enterprise documentation engineer, create a comprehensive technical operations manual for a hybrid cloud environment that spans on-premises data centers and multiple cloud providers (AWS, Azure). The environment hosts mission-critical financial applications with strict compliance requirements (PCI-DSS, SOX). The documentation will serve as the authoritative reference for a global IT operations team that works across different time zones.

Your documentation should include:

1. Environment Architecture and Governance:
   - Detailed architecture diagrams for each environment (on-prem, AWS, Azure)
   - Cross-environment connectivity and data flow mappings
   - Compliance controls and their technical implementation
   - Service classification system (criticality, data sensitivity)
   - Responsibility matrices for different teams and roles
   - Change management and approval workflows

2. Operational Procedures by Environment:
   - Environment-specific access and authentication procedures
   - Resource provisioning and decommissioning workflows
   - Backup and recovery procedures with environment-specific details
   - Security controls and monitoring specific to each platform
   - Cost management and optimization procedures
   - Detailed network configuration management

3. Cross-Environment Operations:
   - Disaster recovery procedures across environments
   - Data migration and synchronization processes
   - Unified monitoring and alerting approach
   - Incident management procedures with clear escalation paths
   - Capacity planning across hybrid infrastructure
   - Business continuity testing procedures

4. Compliance and Audit Support:
   - Evidence collection procedures for each compliance requirement
   - Audit preparation checklists and timelines
   - Remediation procedures for common compliance findings
   - Configuration validation tools and procedures
   - Compliance reporting mechanisms

5. Reference Materials:
   - Environment-specific CLI command references
   - API integration documentation
   - Configuration parameter dictionaries
   - Vendor contact and support information
   - Service level agreements and operational targets
   - Troubleshooting decision trees for complex issues

Format the documentation with:
- Clear visual distinction between different environments
- Standardized procedure formats with prerequisites, steps, and verification
- Version control information and last-updated timestamps
- Explicit indicators for compliance-critical information
- Searchable index of terms and procedures
- Role-based quick reference guides
- Print-friendly formatting for emergency situations

The documentation should be designed for both comprehensive understanding and quick reference during incidents. Include "theory of operation" sections that explain why procedures are designed as they are, to enable operators to make informed decisions when facing novel situations.
```

**Why it works:**
- Specifies specialized role (enterprise documentation engineer)
- Addresses complex hybrid environment with multiple platforms
- Includes compliance and regulatory requirements
- Identifies global team usage across time zones
- Creates comprehensive structure with specialized sections
- Balances environment-specific and cross-environment content
- Includes governance and compliance documentation
- Specifies detailed formatting requirements
- Addresses both educational and reference needs
- Considers emergency usage scenarios

## Common Mistakes and Improvements

### Weak Prompt:
```
Write documentation for a Linux server.
```

**Problems:**
- No specified role
- Extremely vague subject ("Linux server")
- No document type specified
- No audience identification
- No required elements or structure
- No formatting guidance

### Improved Prompt:
```
As a technical documentation specialist, create a comprehensive administration guide for a Linux web server running Apache, MySQL, and PHP (LAMP stack) on Ubuntu 20.04 LTS. The guide should serve both junior administrators who need detailed instructions and senior administrators who need quick reference information.

Include the following sections:
1. System requirements and initial server setup
2. Installation and configuration of all LAMP components
3. Security hardening measures with specific commands and configuration changes
4. Routine maintenance procedures and scheduling recommendations
5. Backup and recovery procedures with tested examples
6. Performance tuning guidelines with before/after benchmarks
7. Troubleshooting common issues with diagnostic steps

Format the documentation with clear headings, command-line examples with expected output, configuration file snippets with explanations of key directives, and warning callouts for operations that could impact availability. Include a table of contents, index of commands, and quick-reference sheets for common tasks. Use progressive disclosure by starting each section with basic information before diving into advanced topics.
```

**Improvements:**
- Added specific role (technical documentation specialist)
- Defined specific environment (LAMP on Ubuntu 20.04)
- Specified document type (administration guide)
- Identified multiple audience types with different needs
- Created structured sections covering key aspects
- Specified formatting and organization requirements
- Included both procedural and reference content
- Added usability elements (TOC, index, quick-reference)
- Specified progressive disclosure approach
