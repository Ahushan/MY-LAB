# 01_elastic_beanstalk.md

# 01. AWS Elastic Beanstalk

## 01.1 Definition
AWS Elastic Beanstalk is a **Platform as a Service (PaaS)** that **deploys and manages applications** on AWS automatically.  
It abstracts the infrastructure management and lets developers focus on code.

---

## 01.2 Key Features
- Supports multiple languages: **Java, Node.js, Python, .NET, Go, Ruby**  
- Automatically manages **infrastructure, load balancing, scaling, and monitoring**  
- Deploys applications from **ZIP, WAR, Docker containers**  
- Provides **auto-scaling and health monitoring**  

---

## 01.3 How Elastic Beanstalk Works
1. Upload your **application code**  
2. Beanstalk provisions necessary **resources** (EC2, RDS, ALB, etc.)  
3. Automatically manages **scaling, load balancing, monitoring, and updates**  
4. Supports **version rollback** and environment updates  

---

## 01.4 Use Cases
- Deploy web applications quickly without managing infrastructure  
- Automatically scale applications based on traffic  
- Test applications in multiple environments  
- Automate deployment pipelines for CI/CD  

---

## 01.5 Best Practices
- Use **environment variables** for configuration instead of hardcoding  
- Keep **applications stateless** for easier scaling  
- Enable **enhanced health monitoring**  
- Use **versioning and immutable deployments** to reduce downtime  
- Monitor logs using **CloudWatch integration**  

---

## 01.6 Diagram
```text
[Application Code]
         |
         v
[Elastic Beanstalk]
         |
         v
[Provisioned Resources: EC2, RDS, ALB, Auto Scaling]
         |
[Health Monitoring / Auto Scaling / Updates]