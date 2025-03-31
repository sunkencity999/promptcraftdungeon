# Troubleshooting Prompt Examples

## Basic Troubleshooting Prompts

### Example 1: Simple Server Issue

**Prompt:**
```
As an IT support technician, troubleshoot why a web server is returning 503 Service Unavailable errors. Check the server logs and service status.
```

**Why it works:**
- Defines the role (IT support technician)
- Specifies the issue (503 errors)
- Identifies the affected system (web server)
- Suggests initial diagnostic steps (check logs and service status)

### Example 2: Structured Desktop Support

**Prompt:**
```
As a desktop support specialist, diagnose why a Windows 10 workstation is experiencing slow startup times. Follow these steps:
1. Check for recently installed software or updates
2. Review system resource usage during startup
3. Examine startup programs and services
4. Verify disk health and performance
5. Check for malware or unwanted programs

Provide likely causes based on the findings from each step.
```

**Why it works:**
- Specifies the role (desktop support specialist)
- Defines the issue (slow startup)
- Identifies the system (Windows 10 workstation)
- Provides a structured diagnostic approach with steps
- Requests analysis of findings

## Intermediate Troubleshooting Prompts

### Example 3: Network Diagnostic Framework

**Prompt:**
```
As a network administrator, develop a systematic troubleshooting approach for diagnosing intermittent packet loss on a corporate WAN connection between headquarters and a branch office. The environment includes Cisco routers, a MPLS connection from provider XYZ, and VoIP traffic that is particularly affected.

Your diagnostic approach should include:

1. Information Gathering Phase:
   - Specific logs and metrics to collect from network devices
   - Timing correlation analysis to identify patterns
   - End-user impact documentation methods
   - Baseline comparison parameters

2. Initial Assessment:
   - Critical network services and protocols to check first
   - Key performance indicators to evaluate
   - Methods to determine if the issue is internal or provider-related
   - Approaches to isolate affected network segments

3. Technical Investigation:
   - Specific commands to run on Cisco devices
   - Packet capture and analysis methodology
   - QoS configuration verification steps
   - Circuit and hardware diagnostics

4. Testing and Validation:
   - Controlled tests that minimize user disruption
   - Methods to reproduce the issue in a controlled manner
   - Techniques to verify potential solutions
   - Monitoring approach to confirm resolution

Ensure the approach prioritizes business-critical VoIP traffic and includes appropriate escalation points to the service provider if needed.
```

**Why it works:**
- Specifies specialized role (network administrator)
- Provides detailed context (corporate WAN, specific equipment)
- Identifies critical traffic (VoIP)
- Creates comprehensive structure with phases
- Requests specific technical elements for each phase
- Includes business priority (VoIP traffic)
- Addresses external dependencies (service provider)

### Example 4: Database Performance Investigation

**Prompt:**
```
As a database administrator, create a methodical troubleshooting plan to diagnose the cause of increasing query response times in a production PostgreSQL database that supports an e-commerce application. The environment includes:
- PostgreSQL 13 running on Linux (Ubuntu 20.04)
- 8-node cluster with primary-replica configuration
- Approximately 500GB of data with 1000+ transactions per minute
- Response times have doubled over the past week with no obvious cause

Your troubleshooting plan should:

1. Define a non-disruptive information gathering approach that:
   - Collects performance metrics without adding significant load
   - Identifies specific PostgreSQL logs and parameters to examine
   - Establishes query performance baselines for comparison
   - Captures workload patterns and resource utilization

2. Include a systematic analysis methodology that:
   - Differentiates between query optimization issues, resource constraints, and configuration problems
   - Prioritizes investigation of high-impact queries
   - Correlates performance degradation with system events or changes
   - Evaluates index usage and effectiveness

3. Specify diagnostic queries and commands to:
   - Identify slow-running or blocking queries
   - Detect connection, lock, or resource contention
   - Assess database maintenance status (vacuum, analyze)
   - Evaluate hardware resource utilization

4. Outline a testing strategy that:
   - Can be executed during maintenance windows or with minimal production impact
   - Validates hypotheses without risking data integrity
   - Includes rollback procedures for any changes
   - Provides clear success criteria for resolution

The plan should prioritize maintaining system availability while diagnosing the issue, and include appropriate points to create backups before making any changes.
```

**Why it works:**
- Specifies specialized role (database administrator)
- Provides detailed technical context (PostgreSQL version, architecture)
- Includes performance metrics and trends
- Creates structured approach with multiple phases
- Requests specific technical diagnostic elements
- Balances thoroughness with operational constraints
- Includes safety measures (backups, rollback procedures)
- Specifies success criteria

## Advanced Troubleshooting Prompts

### Example 5: Enterprise System Integration Diagnosis

**Prompt:**
```
As a senior systems integration specialist, develop a comprehensive cross-domain troubleshooting framework for diagnosing data synchronization failures between the ERP system (SAP) and CRM platform (Salesforce) in a global enterprise environment. The integration uses a middleware solution (MuleSoft) with both real-time API calls and scheduled batch processes. The failure manifests as incomplete or delayed customer data updates, affecting multiple business units across different time zones.

Your diagnostic framework should include:

1. Multi-layer Information Collection Strategy:
   - Business impact assessment methodology (affected processes, departments, severity)
   - End-to-end transaction flow mapping approach
   - Data integrity verification procedures across systems
   - Temporal pattern analysis to correlate with system events
   - Error message and log aggregation from all three systems (SAP, Salesforce, MuleSoft)

2. Cross-System Diagnostic Approach:
   - Systematic boundary testing between each integration point
   - Data transformation validation techniques
   - Authentication and authorization verification across systems
   - Network path analysis between on-premise and cloud components
   - API contract compliance verification

3. Root Cause Isolation Methodology:
   - Decision tree for distinguishing between data, configuration, and infrastructure issues
   - Correlation analysis between failed and successful synchronizations
   - Systematic elimination process for potential causes
   - Controlled reproduction techniques in non-production environments
   - Differential diagnosis between persistent and intermittent failures

4. Technical Investigation Specifications:
   - System-specific diagnostic queries and tools for each platform
   - Middleware flow tracing and message inspection techniques
   - Performance metric collection and analysis across all systems
   - Timeout and threshold configuration review
   - Error handling and retry logic evaluation

5. Operational Considerations:
   - Investigation prioritization based on business impact
   - Maintenance window utilization strategy
   - Stakeholder communication templates and cadence
   - Temporary workaround assessment
   - Phased testing approach to minimize disruption

The framework should accommodate both technical and business perspectives, include appropriate escalation paths to vendors, and maintain comprehensive documentation throughout the troubleshooting process to support knowledge transfer and future prevention.
```

**Why it works:**
- Specifies highly specialized role (senior systems integration specialist)
- Addresses complex multi-system environment
- Provides detailed context about systems and integration methods
- Creates comprehensive multi-layered framework
- Includes business impact assessment
- Requires cross-domain technical investigation
- Balances technical depth with business priorities
- Includes operational and communication elements
- Addresses documentation and knowledge transfer

### Example 6: Security Incident Response Investigation

**Prompt:**
```
As a cybersecurity incident responder, create a methodical forensic investigation plan for a potential data exfiltration incident detected in a financial services environment. Security monitoring has identified unusual outbound traffic patterns from a server containing sensitive customer information, occurring during non-business hours over the past two weeks. The environment includes Windows servers, a VMware virtualization layer, Cisco networking equipment, and various security tools including Splunk SIEM and CrowdStrike endpoint protection.

Your forensic investigation plan should:

1. Initial Containment and Preservation Strategy:
   - Immediate actions to prevent potential ongoing exfiltration while preserving evidence
   - Memory capture and disk imaging procedures with chain of custody documentation
   - Network traffic isolation techniques that won't alert potential attackers
   - Log preservation methods across all relevant systems

2. Evidence Collection Framework:
   - Prioritized data sources to examine (logs, memory dumps, disk images, network captures)
   - Timeline for collection that minimizes operational impact
   - Specific artifacts to gather from each system type (Windows, VMware, network devices)
   - Chain of custody and forensic integrity preservation procedures
   - Data correlation approach across disparate systems

3. Technical Investigation Methodology:
   - Memory analysis techniques to identify unauthorized processes or code
   - Network traffic analysis to identify communication patterns and destinations
   - Log correlation across security tools, operating systems, and applications
   - Filesystem and registry examination for persistence mechanisms
   - User account and authentication analysis

4. Threat Hunting Approach:
   - IOC (Indicators of Compromise) development and refinement process
   - Lateral movement detection techniques
   - Privilege escalation identification methods
   - Data staging and exfiltration pattern recognition
   - Timeline reconstruction methodology

5. Operational Security Measures:
   - Investigation communication protocols to prevent tipping off attackers
   - Secure investigation environment specifications
   - Evidence handling procedures compliant with financial services regulations
   - Parallel investigation paths to accelerate findings
   - Coordination protocol with external agencies if required

The plan should balance thoroughness with urgency appropriate for a financial services environment, include specific technical commands and tools for each investigation phase, and maintain regulatory compliance throughout the process. Include criteria for determining incident severity and escalation thresholds.
```

**Why it works:**
- Specifies specialized role (cybersecurity incident responder)
- Addresses high-stakes scenario (financial services data exfiltration)
- Provides detailed technical environment
- Creates comprehensive investigation framework
- Balances forensic integrity with operational security
- Includes regulatory compliance considerations
- Specifies technical investigation techniques
- Addresses communication and coordination protocols
- Includes severity assessment and escalation criteria

## Common Mistakes and Improvements

### Weak Prompt:
```
Fix the server that's not working.
```

**Problems:**
- No specified role
- Extremely vague issue ("not working")
- No context about the server type or environment
- No diagnostic approach specified
- No parameters or constraints

### Improved Prompt:
```
As a Linux systems administrator, systematically troubleshoot an Ubuntu 20.04 web server that's failing to serve the company's e-commerce website with 503 errors. The server runs Nginx, PHP-FPM, and connects to a separate MySQL database server. The issue began approximately 2 hours ago with no recent deployments or changes.

Develop a structured diagnostic approach that:
1. Gathers initial server state information (load, memory, disk, processes)
2. Checks service status and logs for Nginx and PHP-FPM
3. Verifies connectivity to the database and other dependencies
4. Examines recent error logs with specific attention to timestamps around when the issue started
5. Identifies potential resource constraints or configuration issues

Prioritize non-invasive checks before service restarts or configuration changes, and focus on identifying the root cause rather than just restoring service temporarily. Include specific Linux commands to run at each diagnostic step and what the expected output should be if the system were functioning normally.
```

**Improvements:**
- Added specific role (Linux systems administrator)
- Defined the server type and software stack
- Specified the exact error and application
- Added context about when the issue began
- Created a structured diagnostic approach with steps
- Included priority guidance (non-invasive first)
- Requested specific commands and expected results
- Added focus on root cause, not just symptoms
