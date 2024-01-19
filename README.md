# patientAI

# Overview

This project, developed for CalHacks 2023, aims to address the critical need for patient data privacy in the healthcare sector. The Patient De-identifier is a sophisticated tool designed to anonymize medical records efficiently. The repository houses a decoupled framework that seamlessly integrates frontend and backend components for a seamless user experience.

# Objectives

Create a user-friendly interface for accepting PDF files that simulate medical patient data.
Implement a robust backend capable of parsing PDF files into string format.
Utilize the GPT-4 API with a tailored prompt to de-identify patient information in the parsed text.
Employ the DiffChecker API to visually demonstrate the successful anonymization of patient identifier information.

# Project Features

PDF Input Interface: User-friendly frontend to accept PDF files containing medical patient data.
PDF Parsing: Backend functionality to efficiently parse PDF files into a usable string format.
GPT-4 Integration: Integration with the GPT-4 API for advanced natural language processing to de-identify patient information.
Anonymization Validation: Use of the DiffChecker API to visually validate the effectiveness of the anonymization process.

# Methodology & Insights

The project follows a decoupled architecture, allowing for flexibility and scalability. The PDF parsing and GPT-4 processing are handled independently, facilitating modularity and ease of maintenance. The tailored prompt used with the GPT-4 API is carefully crafted to ensure accurate de-identification while maintaining the integrity of the medical data.

Insights gained during development include optimizing the parsing algorithm for PDF files and fine-tuning the prompt for the GPT-4 API to achieve optimal results. Additionally, the integration of the DiffChecker API provides a transparent and visual means of confirming the successful de-identification of patient identifier information.

# Key Takeaways

Modularity is Key: The decoupled architecture allows for easy modification and scalability of individual components.
Prompt Tuning Matters: Crafting a precise prompt for the GPT-4 API is crucial for accurate de-identification.
Visual Validation: Utilizing visual tools like the DiffChecker API enhances transparency and confidence in the de-identification process.

# Conclusions

The Patient De-identifier project successfully addresses the need for patient data anonymization in the healthcare domain. With a user-friendly interface, robust backend processing, and advanced natural language processing, this tool offers a reliable solution for healthcare professionals seeking to protect patient privacy in their records.

Feel free to explore the repository and contribute to the ongoing development of this essential healthcare privacy tool. Thank you for your interest in our project!
