
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFomrData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    question: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFomrData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.length < 5) {
      newErrors.name = "El nombre debe de contener al menos 5 caracteres";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "El correo electronico debe tener un formato valido";
    }

    if (formData.question.length < 15) {
      newErrors.question =
        "El largo del mensaje debe de ser mayor a 15 caracteres";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Datos enviados");
      setTimeout(() => {
        navigate('/'); // Redirige al home
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-email">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-question">
          <label htmlFor="question">Deja tu consulta:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
          />
          {errors.question && (
            <p className="error-message">{errors.question}</p>
          )}
        </div>

        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
