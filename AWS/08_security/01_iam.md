# 01_iam.md

# 01. What is AWS IAM

**AWS Identity and Access Management (IAM)** is a **service that helps securely control access to AWS resources**.  

- Manage **users, groups, roles, and permissions**  
- Enables **fine-grained access control**  
- Integrated with almost all AWS services  

---

# 02. Key Features

- **Users & Groups** → Organize and manage identities  
- **Roles** → Assign temporary permissions to entities or services  
- **Policies** → JSON-based documents defining permissions  
- **MFA (Multi-Factor Authentication)** → Adds an extra layer of security  
- **IAM Access Analyzer** → Detects unintended access  

---

# 03. How IAM Works

1. **Create users, groups, and roles**  
2. Attach **policies** defining allowed or denied actions  
3. Users authenticate using **passwords or access keys**  
4. Roles can be assumed by **applications, EC2 instances, or Lambda functions**  
5. IAM evaluates requests → grants or denies access based on policies  

---

# 04. Components

### 4.1 Users
- Individual identities for people or applications  
- Can have **passwords, access keys, and MFA**  

### 4.2 Groups
- Collection of users  
- Simplifies **permission management**  

### 4.3 Roles
- Assignable to **AWS services or external identities**  
- Temporary credentials  

### 4.4 Policies
- JSON documents specifying **allow or deny actions**  
- Attached to users, groups, or roles  

---

# 05. Use Cases

- Manage **employee access** to AWS accounts  
- Assign **permissions to applications and services**  
- Enable **cross-account access** securely  
- Implement **least-privilege security**  
- Integrate with **S3, EC2, Lambda, and RDS** for resource access  

---

# 06. Best Practices

- Follow **least privilege principle** → only grant needed permissions  
- Enable **MFA** for all privileged users  
- Use **roles instead of long-term access keys**  
- Regularly **audit IAM policies and access**  
- Use **groups** for bulk permission management  

---

# 07. Interview / Exam Notes

- IAM → **manages users, groups, roles, and permissions**  
- Supports **fine-grained access control**  
- MFA → additional authentication layer  
- Roles → temporary permissions for services  
- Policies → JSON documents defining allow/deny actions  
- Best practice → **least privilege and role-based access**  

---

# 08. Diagram Idea

```text
         [IAM Users]          [IAM Roles]
           |                      |
           |                      |
      [IAM Groups]               [AWS Services]
           \                      /
            \                    /
            [Policies (Allow/Deny)]
                  |
             [AWS Resources]