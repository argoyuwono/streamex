// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-da8e9044b2c93a0ebc6ca4297409ef34');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/da8e9044b2c93a0ebc6ca4297409ef34/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/d1/be/ef/d1beefa0ce88b9fdc61d9df96ac8a884.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="7b62b2afc861dc772196dbfef884ab2a"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/7b/62/b2/7b62b2afc861dc772196dbfef884ab2a.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}