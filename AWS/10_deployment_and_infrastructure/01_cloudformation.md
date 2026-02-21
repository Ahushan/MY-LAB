# 10_deployment_and_infrastructure.md

# 01. AWS CloudFormation

## 01.1 Definition
AWS CloudFormation is an **Infrastructure as Code (IaC) service** that allows you to **model, provision, and manage AWS resources** using templates.

## 01.2 Key Features
- Create and manage **stacks of resources** automatically  
- Templates written in **JSON or YAML**  
- Supports almost **all AWS services**  
- Enables **version control and repeatable deployments**  
- Rollback on errors for safe deployments  

## 01.3 How CloudFormation Works
1. Write a **template** defining AWS resources  
2. Deploy the template to create a **stack**  
3. CloudFormation provisions resources in the defined order  
4. Update or delete stacks as needed  

## 01.4 Use Cases
- Automate infrastructure provisioning  
- Consistent deployment across environments (dev, test, prod)  
- Disaster recovery setup via reproducible templates  
- Standardize architecture across teams  

## 01.5 Best Practices
- Use **YAML for readability**  
- Modularize templates using **nested stacks**  
- Use **parameters, mappings, and outputs** for flexibility  
- Enable **stack policies** to prevent accidental changes  
- Store templates in **version control (GitHub / CodeCommit)**  

## 01.6 Diagram
```text
[CloudFormation Template]
           |
           v
       [Stack Creation]
           |
           v
  [Provisioned AWS Resources: EC2, S3, RDS, IAM, Lambda]
           |
       [Updates / Rollbacks]