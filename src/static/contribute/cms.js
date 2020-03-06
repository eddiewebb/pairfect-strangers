
import HomePreview from "./templates/home.js";


CMS.registerPreviewStyle("/vendor/bootstrap/css/bootstrap.min.css");
CMS.registerPreviewStyle("/css/grayscale.css");

CMS.registerPreviewTemplate("home", HomePreview);
CMS.init();
