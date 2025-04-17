# BestBuy Staff-Service Microservice
Docker image: https://hub.docker.com/repository/docker/nidhi0152/bestbuy-staffservice/tags
##  Overview

The **Staff-Service** microservice is part of the BestBuy Cloud-Native Application. It is a lightweight RESTful service that provides basic CRUD operations for managing staff information. This service adheres to the 12-factor app principles and is containerized for deployment to a Kubernetes environment on Azure AKS.

All data is stored in memory, making it simple and ideal for demonstration or testing purposes.

---

## Functionality

The microservice allows you to:
- Create a new staff member
- Retrieve details of all or a single staff member
- Update staff information
- Delete a staff record

Each staff member record contains:
- `id`: Unique identifier
- `name`: Full name
- `position`: Job title
- `department`: Department name
- `email`: Contact email
- `phone`: Contact number

---

##  API Endpoints

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/staff`               | Get all staff members     |
| GET    | `/staff/{id}`          | Get a staff member by ID  |
| POST   | `/staff`               | Create a new staff member |
| PUT    | `/staff/{id}`          | Update a staff member     |
| DELETE | `/staff/{id}`          | Delete a staff member     |

### ✅ Example JSON Payload for POST/PUT

```json
{
  "id": "1",
  "name": "Jane Doe",
  "position": "Manager",
  "department": "Electronics",
  "email": "jane.doe@bestbuy.com",
  "phone": "123-456-7890"
}

## Task completed
1. 12 factor application
2. AKscluster run and working
![image](https://github.com/user-attachments/assets/28bf4c22-29a1-46db-9112-2769af1ac58d)

3. docker file and deplyment file push and working
4. could not getAZure credential for cid/cd file
