import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Twitter } from "lucide-react"
import styles from "./AuthPage.module.scss"

import authPhoto from '../../assets/images/auth.webp'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "", name: "" })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const toggleView = () => {
    setIsLogin(!isLogin)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = "Email обязателен"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Некорректный email"
    if (!formData.password) newErrors.password = "Пароль обязателен"
    else if (formData.password.length < 6) newErrors.password = "Пароль должен содержать минимум 6 символов"
    if (!isLogin && !formData.name) newErrors.name = "Имя обязательно"
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    console.log("Форма отправлена:", formData)
    alert(`${isLogin ? "Вход" : "Регистрация"} успешно выполнена!`)
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authWrapper}>
        <div className={styles.authLeft}>
          <div className={styles.logo}>
            <NavLink to="/">
              <h1>SkillNation</h1>
            </NavLink>
          </div>
          <div className={styles.dark}></div>
          <div className={styles.authQuote}>
            <p>Выбери профессию по душе, и тебе не придется работать ни одного дня в своей жизни</p>
            <span>— Конфуций</span>
          </div>
        </div>

        <div className={styles.authRight}>
          <div className={styles.authForm}>
            <div className={styles.authHeader}>
              <h2>{isLogin ? "Вход в аккаунт" : "Создание аккаунта"}</h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {!isLogin && (
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Имя</label>
                  <div className={styles.inputWrapper}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? styles.inputError : styles.input} />
                  </div>
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? styles.inputError : styles.input} />
                </div>
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <div className={styles.label}>
                  <label htmlFor="password">Пароль</label>
                </div>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIcon} size={18} />
                  <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className={errors.password ? styles.inputError : styles.input} />
                  <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
              </div>

              <div className={styles.authActions}>
                <button type="submit" className={styles.submitButton}>
                  {isLogin ? "Войти" : "Зарегистрироваться"} <ArrowRight size={18} />
                </button>
              </div>

              <div className={styles.divider}><span>или</span></div>

              <div className={styles.socialLogin}>
                <button type="button" className={styles.socialButton}>
                  <Github size={18} /> GitHub
                </button>
                <button type="button" className={styles.socialButton}>
                  <Twitter size={18} /> Twitter
                </button>
              </div>

              <div className={styles.switchMode}>
                <p>
                  {isLogin ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
                  <button type="button" onClick={toggleView} className={styles.switchButton}>
                    {isLogin ? "Зарегистрироваться" : "Войти"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
