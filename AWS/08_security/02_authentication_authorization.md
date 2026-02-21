# 02_authentication_authorization.md

# 01. What is Authentication & Authorization in AWS

- **Authentication** → Verifying the identity of a user or service  
- **Authorization** → Determining what actions the authenticated entity is allowed to perform  
- Core part of **AWS security and access control**  

---

# 02. Key Features

- **Authentication Methods**  
  - IAM Users & Roles  
  - AWS Cognito for web/mobile apps  
  - Federated login (SAML, OIDC)  

- **Authorization Mechanisms**  
  - IAM policies (Allow/Deny)  
  - Resource-based policies (S3 bucket policies, SNS topics)  
  - Attribute-based access control (ABAC)  

- **Temporary Credentials**  
  - Roles and STS (Security Token Service)  

---

# 03. How it Works

1. **User or service requests access** → presents credentials  
2. AWS **authenticates identity** via IAM, Cognito, or federation  
3. **Authorization policies evaluated** → allow or deny actions  
4. **Temporary credentials** can be issued for limited-time access (STS)  
5. Logs and monitoring can track access for **audit purposes**  

---

# 04. Components

### 4.1 Users & Roles
- **Users** → permanent credentials  
- **Roles** → temporary credentials for services or cross-account access  

### 4.2 Policies
- JSON documents → define **permissions**  
- Can be **identity-based** or **resource-based**  

### 4.3 Federation
- Allow **external identities** (Active Directory, Google, etc.) to access AWS  
- Uses **SAML or OIDC** standards  

### 4.4 Cognito
- Managed service for **user sign-up, sign-in, and access control**  
- Supports **social logins, MFA, and tokens**  

---

# 05. Use Cases

- Secure access for **AWS users and services**  
- Web/mobile apps with **user authentication**  
- Cross-account access for services using **roles**  
- Enforcing **least-privilege policies**  
- Integration with **SSO solutions and federated identity providers**  

---

# 06. Best Practices

- Use **IAM roles instead of long-term credentials**  
- Enable **MFA for privileged accounts**  
- Regularly review and audit **policies and access logs**  
- Use **resource-based policies** for cross-account access  
- Implement **Cognito for app user management**  

---

# 07. Interview / Exam Notes

- Authentication → verify identity (IAM, Cognito, Federation)  
- Authorization → determine allowed actions (Policies, ABAC, RBAC)  
- Use **temporary credentials** for enhanced security  
- Integrates with **CloudTrail for auditing**  
- Best practice → **least privilege + MFA**  

---

# 08. Diagram Idea

```text
        [User / Service]
               |
         [Authentication]
   (IAM, Cognito, Federation)
               |
         [Authorization]
     (Policies, ABAC, RBAC)
               |
          [AWS Resources]