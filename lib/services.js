// lib/services.js

export const SERVICES = [
  { 
    id: 'svc1', 
    title: 'Mobile Location of a spacific time range of any number', 
    price: 15, 
    description: 'Our executive will ask for date and time once you confirm the service',
    requiredFields: [
      { id: 'mobile', label: 'Mobile Number with country code', type: 'tel', placeholder: '+1 555 123 4567' }
    ]
  },
  { 
    id: 'svc2', 
    title: 'Call Records of any number', 
    price: 10, 
    description: 'CDR of mobile number of last 6 Months.',
    requiredFields: [
      { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+1 555 123 4567' }
    ]
  },
  { 
    id: 'svc3', 
    title: 'WhatsApp Chat Export of any number', 
    price: 15, 
    description: 'Whatsapp chat exports of last 6 month of any number.',
    requiredFields: [
      { id: 'whatsappNumber', label: 'WhatsApp Number', type: 'tel', placeholder: '+1 555 987 6543' }
    ]
  },
  { 
    id: 'svc4', 
    title: 'iMessage Access', 
    price: 25, 
    description: 'Text message access of iphone.',
    requiredFields: [
      { id: 'instagramUser', label: 'iPhone Mobile Number', type: 'tel', placeholder: '+1 555 666 7788' }
    ]
  },
  { 
    id: 'svc5', 
    title: 'E-mail Service', 
    price: 25, 
    description: 'Username & Password of any email account.',
    requiredFields: [
      { id: 'gmailAddress', label: 'Gmail Address', type: 'email', placeholder: 'you@gmail.com' }
    ]
  },
  { 
    id: 'svc6', 
    title: 'Photo Gallery Access', 
    price: 25, 
    description: 'Photo access of mobile with logged in email address.',
    requiredFields: [
      { id: 'gmailAddress', label: 'Email Address logged in mobile', type: 'email', placeholder: 'you@gmail.com' }
    ]
  },
  { 
    id: 'svc7', 
    title: 'Live Location', 
    price: 20, 
    description: 'Live location of mobile number, service processed in 15 min.',
    requiredFields: [
      { id: 'targetMobile', label: 'Target Mobile Number', type: 'tel', placeholder: '+1 555 111 2222' }
    ]
  },
  { 
    id: 'svc8', 
    title: 'Snapchat Login Access', 
    price: 15, 
    description: 'Get login password of any Snapchat Account.',
    requiredFields: [
      { id: 'snapid', label: 'Target Snap ID', type: 'text', placeholder: 'you@gmail.com' }
    ]
  },

  { 
    id: 'svc9', 
    title: 'Facebook Login Access', 
    price: 15, 
    description: 'Get login password of any Facebook Account.',
    requiredFields: [
      { id: 'facebookloginemail', label: 'Target facebook email/ID', type: 'text', placeholder: 'you@gmail.com' }
    ]
  },

  { 
    id: 'svc10', 
    title: 'Instagram Login Access', 
    price: 15, 
    description: 'Get login password of any Instagram Account.',
    requiredFields: [
      { id: 'instaid', label: 'Target Instagram ID', type: 'text', placeholder: 'you@gmail.com' }
    ]
  }
];