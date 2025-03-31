# Troubleshooting Prompt Engineering Practice Exercises

## Exercise 1: Troubleshooting Prompt Analysis

Analyze the following troubleshooting prompts and identify which elements make them effective or ineffective:

1. "Fix my server that's not working."

2. "As a Senior Systems Administrator, diagnose the cause of intermittent application timeouts on our web application. The environment consists of a load-balanced cluster of 4 Linux web servers running Nginx, a PostgreSQL database cluster, and Redis for caching. The issue began approximately 48 hours ago, occurs randomly about 3-5 times per hour, and affects roughly 20% of user requests. Recent changes include a minor application update deployed three days ago and routine system updates applied last week. Develop a systematic troubleshooting approach that prioritizes identifying the root cause with minimal service disruption, including specific log files to examine, metrics to collect, and diagnostic tests to perform in order of least to most intrusive."

3. "My network is slow. What's wrong with it?"

4. "As a Network Engineer, investigate the cause of increased latency reported on the corporate WAN between headquarters and three branch offices. The environment includes Cisco routers at all locations, MPLS primary connections with VPN backups, and QoS policies for VoIP traffic. The issue began Tuesday morning and primarily affects VoIP quality during peak business hours (10am-2pm). No known configuration changes were made recently, but ISP maintenance was scheduled last weekend. Create a structured troubleshooting plan that begins with non-disruptive data collection (including specific commands and tools), proceeds through systematic analysis of network layers, develops and tests hypotheses based on collected data, and includes criteria for escalation to the ISP if needed."

5. "Why is my database crashing?"

**Questions to consider:**
- Which prompts have clear problem definitions and context?
- Which prompts provide specific diagnostic methodology direction?
- Which prompts include constraints and considerations?
- How would you improve the weaker prompts?

## Exercise 2: Problem Definition Enhancement

Enhance the following basic troubleshooting prompts by adding detailed problem definitions and context:

1. "Troubleshoot email delivery failures."
2. "Fix slow website performance."
3. "Diagnose printer connectivity issues."
4. "Resolve user authentication problems."
5. "Troubleshoot backup failures."

**Example enhancement:**
- Basic: "Fix server crashes."
- Enhanced: "Diagnose the cause of unexpected server crashes on a production e-commerce application server. The environment consists of an AWS EC2 instance (t3.large) running Ubuntu 20.04 with Apache, PHP 7.4, and MySQL 8.0. The crashes occur approximately 2-3 times daily, primarily during peak traffic periods, and result in 3-5 minutes of downtime each occurrence. The issue began after a recent deployment that included both application code changes and PHP module updates. System monitoring shows spike in memory usage immediately before each crash, but no consistent pattern in CPU utilization."

## Exercise 3: Diagnostic Methodology Specification

For each of the following technical issues, create a prompt that includes comprehensive diagnostic methodology direction:

1. Inconsistent wireless network coverage in an office environment
2. Unexpected system reboots on a virtualization host
3. Slow database query performance for specific operations
4. File permission errors in a multi-user environment
5. Intermittent API integration failures between systems

Your prompts should specify:
- Information gathering approaches
- Analysis frameworks
- Hypothesis development methods
- Testing strategies
- Isolation techniques

## Exercise 4: Solution Implementation Guidance

Create troubleshooting prompts that include explicit solution implementation guidance for each of the following scenarios:

1. DNS resolution failures affecting specific services
2. Load balancer configuration issues
3. Storage system performance degradation
4. Security certificate expiration problems
5. Network routing inconsistencies

For each prompt, include requirements for:
- Validation methods before implementation
- Implementation sequencing
- Rollback procedures
- Testing protocols
- Documentation requirements

## Exercise 5: Constraint and Consideration Specification

For each of the following troubleshooting scenarios, create a prompt that thoroughly addresses constraints and considerations:

1. Troubleshooting a critical production system during business hours
2. Diagnosing issues in a highly regulated environment (healthcare, finance)
3. Resolving problems in a geographically distributed system
4. Troubleshooting with limited access privileges
5. Diagnosing issues in a system with minimal documentation

Your prompts should specify:
- Service impact limitations
- Security and compliance requirements
- Communication protocols
- Escalation criteria
- Resource constraints

## Challenge Exercise: Comprehensive Troubleshooting Framework

Create a comprehensive troubleshooting prompt framework that can be adapted for different technical domains. Your framework should include sections for:

1. Problem definition and context (issue description, environment, scope, timing, changes)
2. Diagnostic methodology (information gathering, analysis, hypothesis testing)
3. Solution implementation (validation, sequencing, rollback, testing)
4. Constraints and considerations (impact, security, communication)
5. Documentation and knowledge transfer
6. Prevention and monitoring recommendations

Use your framework to create detailed prompts for:
1. A complex network performance issue
2. A critical application availability problem
3. A data integrity issue in a database system

For each prompt, explain how your framework ensures the troubleshooting process will be systematic, effective, and appropriate for the operational context.
