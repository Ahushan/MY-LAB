# 04_cloudfront.md

# 01. What is Amazon CloudFront

**Amazon CloudFront** is a **content delivery network (CDN)** that securely delivers **static, dynamic, and streaming content** to users with **low latency and high transfer speeds**.  

- Uses **edge locations** globally to cache content closer to users  
- Supports **HTTP/HTTPS** delivery, streaming, and WebSocket  
- Integrates with **S3, ELB, ALB, API Gateway, and custom origins**

---

# 02. Key Features

- **Global Edge Network** → Content served from nearest location  
- **Caching & TTL** → Reduces load on origin servers  
- **HTTPS & TLS Support** → Secure content delivery  
- **Custom Origins** → S3, EC2, ALB, NLB, or on-premises  
- **Lambda@Edge** → Run code closer to users for personalization or header manipulation  

---

# 03. How CloudFront Works

1. User requests content → DNS routes request to **nearest edge location**  
2. Edge checks **cache** for requested content  
   - If content is **cached → served directly**  
   - If content **not cached → fetches from origin**  
3. Response delivered to the user **low latency, high speed**  

---

# 04. Caching & TTL

- **Time-to-Live (TTL)** → Determines how long content is cached  
- Can set **minimum, maximum, and default TTLs**  
- Supports **cache invalidation** for updated content  
- Reduces **origin server load and latency**  

---

# 05. Use Cases

- Deliver **static websites** (HTML, CSS, JS, images)  
- Video streaming → live or on-demand  
- APIs → low-latency edge caching  
- Security → use with **AWS WAF** for protection  
- Global applications needing **fast content delivery**  

---

# 06. Best Practices

- Enable **HTTPS** to secure traffic  
- Configure **origin failover** for high availability  
- Use **Lambda@Edge** for personalization or custom logic  
- Set appropriate **TTL values** to balance freshness and performance  
- Monitor performance using **CloudWatch and CloudFront metrics**  

---

# 07. Interview / Exam Notes

- CloudFront → **global CDN** with edge locations  
- Supports **static, dynamic, and streaming content**  
- Integrates with **S3, ELB, ALB, NLB, API Gateway**  
- Use **Lambda@Edge** for custom processing at edge  
- Reduces **latency and origin load**, improves **user experience**  

---

# 08. Diagram Idea

```text
           [Users Worldwide]
                   |
              [CloudFront Edge]
           -----------------------
           |          |          |
        [Cache]    [Cache]    [Cache]
           |          |          |
         [Origin: S3/ALB/EC2/NLB]