// Global animation utilities and CSS classes

export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse'
}

export const createAnimationStyles = () => {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }

    .animate-slide-in-up {
      animation: slideInUp 0.6s ease-out forwards;
    }

    .animate-slide-in-down {
      animation: slideInDown 0.6s ease-out forwards;
    }

    .animate-scale-in {
      animation: scaleIn 0.6s ease-out forwards;
    }

    /* Smooth transitions for interactive elements */
    button, a, .card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Hover effects */
    button:hover, a:hover {
      transform: translateY(-2px);
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  `
  document.head.appendChild(style)
}
