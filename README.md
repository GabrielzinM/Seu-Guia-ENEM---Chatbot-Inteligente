# 📚 Seu Guia ENEM - Chatbot Inteligente  

<div align="center">  
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">  
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">  
  <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini">  
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">  
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">  
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">  
</div>  

---

## ✨ Visão Geral  

O **Seu Guia ENEM** é um chatbot especializado que utiliza **IA generativa** (Google Gemini) para fornecer informações precisas e atualizadas sobre o Exame Nacional do Ensino Médio (ENEM). Desenvolvido durante a **Imersão IA da Alura**, o projeto combina tecnologias modernas para criar uma experiência interativa e útil para estudantes.  

🔹 **Principais recursos:**  
✔️ Respostas baseadas em fontes oficiais (MEC/Inep)  
✔️ Explicações sobre matérias, redação e programas (Sisu, Prouni, Fies)  
✔️ Interface amigável e responsiva  
✔️ Integração com a API do Google Gemini  

---

## 🚀 Como Funciona  

### **Backend (Flask + Gemini API)**  
- Processa perguntas dos usuários  
- Consulta a API do Gemini com instruções especializadas  
- Retorna respostas formatadas em markdown  

### **Frontend (HTML/CSS/JS)**  
- Interface limpa e intuitiva  
- Exibe mensagens em formato de chat  
- Suporte a links e formatação de texto  

### **IA Generativa (Google Gemini 2.0 Flash)**  
- Modelo otimizado para respostas rápidas  
- Configuração personalizada para precisão e relevância  
- Filtragem de conteúdo sensível  

---

## ⚙️ Configuração e Uso  

### **Pré-requisitos**  
- Python 3.10+  
- Conta no [Google AI Studio](https://aistudio.google.com/)  
- Chave de API do Gemini  

### **Passo a Passo**  

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/GabrielzinM/Seu-Guia-ENEM---Chatbot-Inteligente.git
2. **Instale as dependências**  
   ```sh
    pip install flask google-generativeai python-dotenv
3. **Configure sua API Key**  
   ```sh
    GOOGLE_API_KEY=sua_chave_aqui
4. **Execute o servidor**  
   ```sh
    python app.py
5. **Acesse a aplicação no navegador**

## 📌 Exemplo de Uso da API Gemini
    ```sh
     import google.generativeai as genai
      from google.generativeai.types import GenerationConfig

      # Configuração
      genai.configure(api_key='SUA_CHAVE_AQUI')
      model = genai.GenerativeModel('models/gemini-2.0-flash')

      # Instruções do chatbot
      system_instruction = """
      Você é um assistente especializado no ENEM. 
      Siga estas regras:
      1. Priorize fontes oficiais (MEC/Inep)
      2. Seja conciso e claro
      3. Destaque informações importantes em **negrito**
      """

      # Gerando resposta
      response = model.generate_content(
          system_instruction + "\nUsuário: Quando sai o edital do ENEM 2024?",
          generation_config=GenerationConfig(
              temperature=0.7,
              max_output_tokens=800
          )
      )
      print(response.text)

---

## 🎓 Sobre a Imersão IA da Alura
Este projeto foi desenvolvido durante a Imersão IA com Google Gemini, onde aprendemos:

- Fundamentos de IA generativa
- Integração com APIs da Google
- Técnicas para chatbots especializados
- Boas práticas de prompt engineering

---

## 🌟 Créditos
Desenvolvido por: Gabriel Augusto Fernandes Ferreira Martins

Inspirado por: Imersão IA Alura + Google Gemini

Ícones: Font Awesome

<div align="center"> <p>✨ Feito com Python, Flask e Gemini ✨</p> </div>
