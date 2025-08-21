export interface ContactInfo {
  phone: string;
  tollFree: string;
  fax: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupLocation: string;
  deliveryLocation: string;
  weight: string;
  dimensions: string;
  description: string;
}