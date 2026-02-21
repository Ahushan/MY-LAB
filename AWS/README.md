# AWS Learning & Reference Repository

Welcome to the **AWS GitHub Repository** — a **certification-ready, interview-ready, and architect-level structured documentation** of AWS services.  
This repository includes **concepts, definitions, use cases, diagrams, best practices, and example services** for all major AWS services.

---

## Repository Structure

AWS/
├── 01_cloud_basics/
├── 02_compute/
├── 03_storage/
├── 04_networking/
├── 05_load_balancing_and_cdn/
├── 06_databases/
├── 07_messaging/
├── 08_security/
├── 09_monitoring_and_operations/
└── 10_deployment_and_infrastructure/

---

## 01. Cloud Basics
Fundamental concepts of cloud computing.

- 01_cloud_basics/cloud_models.md → Cloud Service Models (IaaS, PaaS, SaaS)  
- 01_cloud_basics/deployment_models.md → Public, Private, Hybrid, and Multi-Cloud Deployment Models  
- 01_cloud_basics/benefits.md → Advantages of cloud computing  
- 01_cloud_basics/global_infrastructure.md → AWS regions, Availability Zones, and edge locations  

---

## 02. Compute
AWS services to run applications and workloads.

- ec2.md → Elastic Compute Cloud  
- ami.md → Amazon Machine Images  
- instance_types.md → EC2 Instance Types and families  
- elastic_ip.md → Static IP addresses for EC2  
- eni.md → Elastic Network Interfaces  
- auto_scaling.md → Auto Scaling Groups  
- lambda.md → Serverless compute with AWS Lambda  

---

## 03. Storage
AWS storage services and classes.

- s3.md → Amazon S3 object storage  
- s3_storage_classes.md → S3 Standard, Intelligent-Tiering, IA, Glacier, Deep Archive  
- glacier.md → Low-cost archival storage  
- ebs.md → Elastic Block Store for EC2  
- efs.md → Elastic File System  

---

## 04. Networking
Networking services for connectivity and security.

- vpc.md → Virtual Private Cloud  
- subnets.md → Public and private subnets  
- route_tables.md → Routing configuration  
- internet_gateway.md → Internet connectivity  
- nat_gateway.md → Outbound internet access for private subnets  
- security_groups.md → Instance-level firewall rules  
- nacl.md → Network Access Control Lists  
- direct_connect.md → Dedicated private connections  
- route53.md → DNS service  

---

## 05. Load Balancing & CDN
Distribute traffic and improve performance.

- elastic_load_balancer.md → Classic Load Balancer  
- alb.md → Application Load Balancer  
- nlb.md → Network Load Balancer  
- cloudfront.md → Content Delivery Network  

---

## 06. Databases
Managed database services.

- rds.md → Relational Database Service  
- aurora.md → High-performance relational database  
- dynamodb.md → NoSQL database  
- redshift.md → Data warehouse  
- documentdb.md → Document-oriented database  
- neptune.md → Graph database  
- elasticache.md → In-memory caching  

---

## 07. Messaging
Event-driven messaging services.

- sns.md → Simple Notification Service  
- sqs.md → Simple Queue Service  

---

## 08. Security & Compliance
Services for securing resources and managing compliance.

- iam.md → Identity and Access Management  
- authentication_authorization.md → Auth & access strategies  
- security_domains.md → Security domains and layers  
- kms.md → Key Management Service  
- shield.md → DDoS protection  
- waf.md → Web Application Firewall  
- guardduty.md → Threat detection and monitoring  
- inspector.md → Security assessments  
- macie.md → Data classification and protection  
- secrets_manager.md → Secret storage and management  
- cloudhsm.md → Hardware Security Module  
- certificate_manager.md → SSL/TLS certificate management  
- artifact.md → Compliance reports and certifications  
- directory_service.md → Managed Microsoft Active Directory  
- cognito.md → User authentication and single sign-on (SSO)  
- organizations.md → Multi-account management  
- firewall_manager.md → Centralized firewall management  

---

## 09. Monitoring & Operations
Observability, reliability, and operational best practices.

- cloudwatch.md → Metrics, logs, alarms, dashboards  
- config.md → Resource configuration tracking and compliance  
- reliability_tools.md → Auto scaling, health checks, fault injection simulator  
- well_architected_framework.md → AWS best practices across 5 pillars  

---

## 10. Deployment & Infrastructure
Infrastructure automation and application deployment.

- cloudformation.md → Infrastructure as Code (IaC)  
- elastic_beanstalk.md → Platform as a Service (PaaS) for applications  

---

## ✅ Notes
- All files contain **definition, use cases, diagrams, best practices, differences, and example services**.  
- Designed for **AWS certification, interviews, and architect-level understanding**.  
- Each folder can be explored independently or as a full learning path.  