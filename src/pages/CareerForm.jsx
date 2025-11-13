import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const CareerForm = () => {
    // Estados para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        cvFile: null,
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    // Ref para resetear el input file
    const fileInputRef = useRef(null);

    // Configuración de EmailJS - REEMPLAZA CON TUS DATOS REALES
    const EMAILJS_CONFIG = {
        serviceId: 'service_xxxxxxxxx', // Reemplaza con tu Service ID
        templateId: 'template_xxxxxxxxx', // Reemplaza con tu Template ID
        publicKey: 'tu_public_key_xxxxxxxxx', // Reemplaza con tu Public Key
    };

    // Maneja los cambios en los campos de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Maneja la carga del archivo (CV)
    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, cvFile: e.target.files[0] }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            // Preparamos los parámetros para EmailJS
            const templateParams = {
                to_email: 'lencionicati@gmail.com', // Email destino (oculto al usuario)
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || 'No proporcionado',
                message: formData.message || 'No proporcionado',
                cv_file_name: formData.cvFile ? formData.cvFile.name : 'No adjuntado',
                subject: `Nueva postulación de trabajo - ${formData.name}`,
            };

            // Enviamos el email usando EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            console.log('Email enviado exitosamente:', result);

            // Éxito - resetear formulario
            setSuccess(true);
            setFormData({ 
                name: '', 
                email: '', 
                phone: '', 
                message: '', 
                cvFile: null 
            });
            
            // Resetear input file
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

        } catch (err) {
            console.error('Error al enviar el formulario:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Envía tu CV</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Nombre */}
                <div>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nombre completo *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                
                {/* Email */}
                <div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Correo electrónico *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                
                {/* Teléfono */}
                <div>
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder="Teléfono de contacto"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                
                {/* Mensaje */}
                <div>
                    <textarea 
                        name="message"
                        placeholder="¿Qué área te interesa? (Opcional)"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    ></textarea>
                </div>

                {/* Carga de CV */}
                <div className="border border-dashed border-blue-400 p-4 rounded-xl bg-blue-50">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Adjunta tu Currículum Vitae (PDF o DOCX) *
                    </label>
                    <input 
                        ref={fileInputRef}
                        type="file" 
                        name="cvFile"
                        accept=".pdf,.doc,.docx,.PDF,.DOC,.DOCX"
                        onChange={handleFileChange}
                        required
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
                    />
                    {formData.cvFile && (
                        <p className="text-xs text-green-600 mt-2 font-medium">
                            ✅ Archivo seleccionado: {formData.cvFile.name}
                        </p>
                    )}
                    <p className="text-xs text-slate-500 mt-2">
                        Formatos aceptados: PDF, DOC, DOCX (Máx. 5MB)
                    </p>
                </div>

                {/* Mensajes de Estado */}
                {loading && (
                    <div className="flex items-center justify-center text-blue-600 font-medium py-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando tu postulación...
                    </div>
                )}
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-xl font-semibold text-center">
                        ¡Gracias {formData.name}! Tu postulación ha sido recibida con éxito. ✅<br />
                        <span className="text-sm font-normal">Nos pondremos en contacto contigo pronto.</span>
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-xl font-semibold text-center">
                        ❌ Hubo un error al enviar tu postulación.<br />
                        <span className="text-sm font-normal">Por favor, intenta nuevamente o contáctanos directamente.</span>
                    </div>
                )}

                {/* Botón de Envío */}
                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Procesando...
                        </span>
                    ) : (
                        '📨 Enviar Postulación'
                    )}
                </button>

                {/* Información de privacidad */}
                <p className="text-xs text-slate-500 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
                </p>
            </form>
        </div>
    );
};

export default CareerForm;