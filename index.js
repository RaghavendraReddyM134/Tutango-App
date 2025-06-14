import { registerRootComponent } from 'expo';
import App from '/App'; // ✅ Import from app.js, not app.json

registerRootComponent(App); // ✅ Register the root component
