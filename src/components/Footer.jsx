import { useTranslation } from "react-i18next";
import logo from "../assets/images/shippingPlanes.jpg"; // Assure-toi que ce chemin est correct

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded" />
            <span className="text-lg font-bold">Ter Maximum Ltd</span>
          </div>
          <p className="leading-relaxed text-gray-200">
            {t("footer.description")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline text-gray-200">{t("footer.about")}</a></li>
            <li><a href="#services" className="hover:underline text-gray-200">{t("footer.services")}</a></li>
            <li><a href="#contact" className="hover:underline text-gray-200">{t("footer.contact")}</a></li>
            <li><a href="#map" className="hover:underline text-gray-200">{t("footer.location")}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{t("footer.contactInfo")}</h4>
          <ul className="space-y-2 text-gray-200">
            <li><span className="font-medium">{t("footer.addressTitle")}:</span> GT-117-0143, NHIA Office, Sixth Ave, Community 8, Tema, Ghana</li>
            <li><span className="font-medium">{t("footer.emailTitle")}:</span> info@termaximum.com</li>
            <li><span className="font-medium">{t("footer.phoneTitle")}:</span> +233 3003325078/+233 507055954</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Ter Maximum Ltd. {t("footer.allRightsReserved")}
      </div>
    </footer>
  );
}
