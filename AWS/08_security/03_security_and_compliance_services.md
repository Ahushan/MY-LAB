# 03_security_and_compliance_services.md

# 01. AWS Artifact

## 01.1 Definition
AWS Artifact is a self-service portal that provides access to AWS compliance reports and agreements.

## 01.2 Use Cases
- Download SOC, ISO, PCI compliance reports
- Review AWS security certifications
- Sign Business Associate Agreements (BAA)

---

# 02. AWS Firewall Manager

## 02.1 Definition
AWS Firewall Manager centrally manages firewall rules across AWS accounts in an organization.

## 02.2 Use Cases
- Manage WAF rules across multiple accounts
- Enforce security policies organization-wide
- Centralized DDoS protection configuration

---

# 03. AWS Organizations

## 03.1 Definition
AWS Organizations helps manage multiple AWS accounts centrally.

## 03.2 Use Cases
- Consolidated billing
- Apply Service Control Policies (SCPs)
- Central governance across accounts

---

# 04. AWS Certificate Manager (ACM)

## 04.1 Definition
AWS Certificate Manager provisions, manages, and deploys SSL/TLS certificates.

## 04.2 Use Cases
- Secure websites with HTTPS
- Integrate with ALB, CloudFront
- Automatic certificate renewal

---

# 05. Amazon GuardDuty

## 05.1 Definition
Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity or unauthorized behavior.

## 05.2 Use Cases
- Detect compromised EC2 instances
- Monitor suspicious API calls
- Integrate with CloudWatch or Lambda for automated responses

---

# 06. AWS Shield

## 06.1 Definition
AWS Shield is a managed DDoS protection service.

## 06.2 Use Cases
- Protect applications against volumetric attacks
- Integration with CloudFront and ELB
- Advanced protection with Shield Advanced

---

# 07. AWS WAF (Web Application Firewall)

## 07.1 Definition
AWS WAF protects web applications from common web exploits.

## 07.2 Use Cases
- Block SQL injection and XSS attacks
- Rate-based rule enforcement
- Integrate with CloudFront, ALB, API Gateway

---

# 08. AWS IAM (Identity and Access Management)

## 08.1 Definition
IAM manages access to AWS resources via users, groups, roles, and policies.

## 08.2 Use Cases
- Fine-grained access control
- Enforce least-privilege principle
- Temporary roles for services and applications

---

# 09. AWS Secrets Manager

## 09.1 Definition
Secrets Manager securely stores and rotates secrets like database credentials or API keys.

## 09.2 Use Cases
- Automatic credential rotation
- Secure storage and retrieval of secrets
- Integration with Lambda, RDS, EC2

---

# 10. AWS CloudHSM

## 10.1 Definition
CloudHSM provides hardware-based key storage for cryptographic operations.

## 10.2 Use Cases
- FIPS 140-2 compliant key storage
- High-performance encryption operations
- Integration with KMS or custom applications

---

# 11. Amazon Inspector

## 11.1 Definition
Amazon Inspector is a vulnerability assessment service for AWS workloads.

## 11.2 Use Cases
- Automated security assessments
- Identify vulnerabilities in EC2 or container workloads
- Generate detailed compliance reports

---

# 12. Amazon Cognito

## 12.1 Definition
Cognito manages user authentication, authorization, and identity for web/mobile apps.

## 12.2 Use Cases
- User sign-up and sign-in
- Social and enterprise federation
- MFA and token-based authentication

---

# 13. AWS KMS (Key Management Service)

## 13.1 Definition
KMS is a managed service to create and control cryptographic keys.

## 13.2 Use Cases
- Encrypt S3, EBS, RDS data
- Integrate with CloudTrail for key usage auditing
- Centralized key management across services

---

# 14. AWS Directory Service

## 14.1 Definition
Directory Service provides managed Microsoft Active Directory or Simple AD in AWS.

## 14.2 Use Cases
- Enterprise user management
- Single sign-on (SSO) integration
- LDAP authentication for AWS services

---

# 15. Amazon Macie

## 15.1 Definition
Amazon Macie uses ML to discover, classify, and protect sensitive data in AWS.

## 15.2 Use Cases
- Identify PII in S3 buckets
- Data privacy compliance monitoring
- Alerts for suspicious data access

---

# 16. AWS Single Sign-On (SSO)

## 16.1 Definition
AWS SSO centrally manages **access to multiple AWS accounts and business applications**.

## 16.2 Use Cases
- One login for multiple AWS accounts
- Integrates with identity providers (AD, Okta)
- Manage permissions via permission sets