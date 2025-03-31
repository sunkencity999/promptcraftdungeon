# Automation Prompt Examples

## Basic Automation Prompts

### Example 1: Simple Backup Script

**Prompt:**
```
As a system administrator, write a bash script to backup the /var/www directory to a tar archive with today's date in the filename.
```

**Why it works:**
- Defines the role (system administrator)
- Specifies the language (bash script)
- Identifies the task (backup)
- Specifies the target (/var/www directory)
- Includes a specific requirement (date in filename)

### Example 2: Structured Log Rotation

**Prompt:**
```
As a Linux administrator, create a script that rotates log files in the /var/log directory. The script should:
1. Compress logs older than 7 days
2. Delete logs older than 30 days
3. Create a summary of the actions taken
4. Send an email notification when complete

Use proper error handling to check if the operations are successful.
```

**Why it works:**
- Specifies the role (Linux administrator)
- Defines the task (log rotation)
- Provides a structured approach with numbered steps
- Includes specific timeframes (7 days, 30 days)
- Requests error handling
- Specifies notification method

## Intermediate Automation Prompts

### Example 3: Comprehensive Server Provisioning

**Prompt:**
```
As a DevOps engineer, create a Bash script to automate the provisioning of a new web server on Ubuntu 20.04 LTS. The script should:

1. System Preparation:
   - Update the package repository and upgrade existing packages
   - Install essential tools (curl, wget, vim, htop, net-tools)
   - Configure timezone to UTC
   - Set up automatic security updates

2. Web Server Installation:
   - Install Nginx with appropriate modules
   - Configure Nginx with optimized settings for performance
   - Set up a basic virtual host configuration
   - Enable and configure the firewall (ufw) to allow HTTP/HTTPS

3. Security Hardening:
   - Create a non-root user with sudo privileges
   - Configure SSH for key-based authentication only
   - Disable root login and password authentication
   - Set appropriate file permissions on web directories

4. Monitoring Setup:
   - Install and configure a basic monitoring agent
   - Set up log rotation and aggregation
   - Create a simple health check script

Include comprehensive error handling throughout the script, with appropriate exit codes and error messages. The script should be idempotent (safe to run multiple times) and include logging of all actions taken. Add comments explaining each section and provide usage instructions at the top of the script.
```

**Why it works:**
- Specifies specialized role (DevOps engineer)
- Defines specific environment (Ubuntu 20.04 LTS)
- Creates comprehensive structure with main sections and subsections
- Includes diverse technical tasks
- Requires specific technical approaches (idempotency)
- Specifies error handling requirements
- Requests documentation and comments

### Example 4: Automated Database Maintenance

**Prompt:**
```
As a database administrator, create a Python script to automate MySQL database maintenance tasks for a production environment. The environment consists of a primary database server with multiple databases of varying sizes (1GB to 500GB).

Your script should:

1. Connection and Authentication:
   - Use secure credential management (environment variables or a vault)
   - Implement connection pooling for efficiency
   - Include proper error handling for connection failures
   - Support both local socket and TCP/IP connections

2. Maintenance Operations:
   - Perform table optimization on tables with high fragmentation
   - Run ANALYZE TABLE on tables with outdated statistics
   - Check and repair tables that show corruption
   - Identify and kill long-running queries based on configurable thresholds

3. Performance Analysis:
   - Collect key performance metrics before and after maintenance
   - Generate a report of potential performance issues
   - Identify tables that might need indexing or schema changes
   - Log query cache hit rates and buffer pool utilization

4. Safety Measures:
   - Implement a dry-run mode that shows what would be done without making changes
   - Include a backup verification step before performing operations
   - Add rate limiting to prevent overloading the server
   - Implement progressive timeouts for operations on larger tables

5. Notification and Reporting:
   - Generate a detailed HTML report of actions taken and findings
   - Send email notifications with the report attached
   - Log all operations to a structured log file
   - Integrate with monitoring systems via a configurable webhook

The script should be configurable via a YAML configuration file, include comprehensive exception handling, and provide detailed logging at different verbosity levels. Make it compatible with Python 3.6+ and minimize external dependencies.
```

**Why it works:**
- Specifies specialized role (database administrator)
- Provides detailed context (production environment, database sizes)
- Creates comprehensive structure with technical sections
- Includes specific database operations
- Requires safety measures and dry-run capability
- Specifies configuration approach (YAML)
- Includes reporting and notification requirements
- Addresses compatibility and dependency considerations

## Advanced Automation Prompts

### Example 5: Multi-Environment Deployment Pipeline

**Prompt:**
```
As a senior DevOps architect, create a comprehensive CI/CD automation script using GitHub Actions that implements a secure, multi-environment deployment pipeline for a microservices application. The application consists of 5 containerized services deployed to Kubernetes clusters across development, staging, and production environments on AWS.

Your automation should include:

1. Pipeline Structure and Workflow:
   - Implement a trunk-based development model with feature branches
   - Create separate workflows for PR validation, development, staging, and production deployments
   - Design a promotion mechanism between environments with appropriate approvals
   - Implement parallel execution where appropriate to minimize pipeline duration

2. Security and Compliance Controls:
   - Integrate automated security scanning (SAST, container scanning, dependency checks)
   - Implement secrets management using AWS Secrets Manager
   - Include compliance verification steps for regulatory requirements
   - Enforce separation of duties through required approvals for production deployments
   - Implement audit logging for all pipeline actions

3. Testing Strategy:
   - Configure unit and integration test execution with coverage reporting
   - Implement end-to-end testing in the staging environment
   - Add performance testing for critical services
   - Include chaos testing to verify resilience
   - Design a test data management strategy

4. Deployment Mechanisms:
   - Implement blue/green deployment for zero-downtime updates
   - Create automatic rollback triggers based on health metrics
   - Include canary deployment capability for high-risk changes
   - Configure service mesh integration for traffic management
   - Implement database migration handling with versioning

5. Observability and Verification:
   - Add post-deployment verification steps for each environment
   - Implement automatic metric collection and threshold verification
   - Create deployment dashboards with key performance indicators
   - Configure alerting for deployment-related issues
   - Include integration with incident management systems

The automation should be modular, allowing teams to customize specific steps while maintaining the overall governance framework. Include comprehensive documentation for both pipeline maintainers and service developers. The solution should minimize cloud costs through efficient resource utilization and implement appropriate timeout and cleanup mechanisms.
```

**Why it works:**
- Specifies highly specialized role (senior DevOps architect)
- Addresses complex multi-environment scenario
- Provides detailed context about the application architecture
- Creates comprehensive structure with sophisticated sections
- Includes advanced deployment strategies (blue/green, canary)
- Incorporates security, compliance, and governance
- Requires modular design for team customization
- Addresses cost optimization
- Balances standardization with flexibility

### Example 6: Cross-Platform Infrastructure Monitoring

**Prompt:**
```
As an enterprise infrastructure automation specialist, develop a cross-platform monitoring and alerting system using PowerShell for Windows components and Bash for Linux/Unix components. The system will monitor a hybrid environment consisting of 200+ servers across on-premises data centers and multiple cloud providers (AWS, Azure).

Your automation solution should include:

1. Architecture and Integration:
   - Design a modular collector framework with platform-specific and common components
   - Implement a central configuration management system for all monitoring settings
   - Create a unified data model that normalizes metrics across platforms
   - Develop integration with existing monitoring tools (Prometheus, Nagios, CloudWatch)
   - Implement secure communication between components using certificate-based authentication

2. Data Collection Mechanisms:
   - For Windows: WMI/CIM, Performance Counters, Event Logs, IIS Logs, SQL Server metrics
   - For Linux: procfs, sysfs, systemd-journald, custom application logs
   - For Network: SNMP, NetFlow, API-based collection from network appliances
   - For Cloud: Provider-specific APIs with appropriate rate limiting and error handling
   - For Applications: Custom endpoints, log parsing, and transaction monitoring

3. Processing and Analysis:
   - Implement anomaly detection using statistical methods
   - Create correlation rules to identify related events across systems
   - Develop trend analysis for capacity planning
   - Include threshold management with dynamic baseline calculation
   - Add business impact assessment based on service dependencies

4. Alerting and Remediation:
   - Design a multi-channel notification system (email, SMS, chat platforms)
   - Implement alert routing based on time of day, severity, and team responsibility
   - Create an alert deduplication and suppression mechanism
   - Develop automated remediation workflows for common issues
   - Include escalation paths with acknowledgment tracking

5. Operational Considerations:
   - Implement self-monitoring to detect collector failures
   - Create a collector update mechanism that preserves configuration
   - Design appropriate data retention and archiving policies
   - Include comprehensive logging with debug capabilities
   - Develop performance optimization to minimize resource usage on monitored systems

The solution should be highly resilient to network partitions and component failures, with appropriate caching and retry mechanisms. Include detailed documentation covering installation, configuration, customization, and troubleshooting. The code should follow industry best practices for each platform while maintaining consistent patterns across the entire solution.
```

**Why it works:**
- Specifies highly specialized role (enterprise infrastructure automation specialist)
- Addresses complex hybrid environment
- Specifies multiple platforms (Windows, Linux, cloud providers)
- Creates comprehensive structure with sophisticated technical sections
- Includes platform-specific collection methods
- Requires advanced analysis capabilities
- Addresses operational concerns and resilience
- Balances platform-specific approaches with consistent patterns
- Includes documentation and best practices requirements

## Common Mistakes and Improvements

### Weak Prompt:
```
Write a script to check disk space.
```

**Problems:**
- No specified role
- Extremely vague task ("check disk space")
- No language or platform specified
- No requirements or parameters
- No error handling or output specifications

### Improved Prompt:
```
As a Linux system administrator, create a Bash script that monitors disk space usage across all mounted filesystems. The script should:

1. Check all mounted filesystems excluding temporary and network mounts
2. Alert when any filesystem exceeds 85% usage
3. Include the following in alerts:
   - Filesystem name and mount point
   - Current usage percentage
   - Available space in human-readable format
   - Largest directories contributing to usage (top 5)
4. Send alerts via both email and system logging
5. Include a summary report even when no filesystems exceed thresholds

Implement proper error handling for commands that might fail, use functions for modularity, and include comments explaining the logic. The script should be configurable via variables at the top (threshold percentage, email recipients, excluded filesystems) and should handle unusual filesystem names with spaces or special characters.
```

**Improvements:**
- Added specific role (Linux system administrator)
- Specified language (Bash)
- Defined clear task with specific threshold (85%)
- Added detailed requirements for what to include in alerts
- Specified notification methods (email, system logging)
- Required error handling and modularity
- Added configuration requirements
- Included edge case handling (unusual filesystem names)
