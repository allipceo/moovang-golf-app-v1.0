// 스윙 데이터셋 - 20회 연속 측정 시뮬레이션
const swingDataset = {
    // 워밍업 단계 (1-4회)
    warmup: [
        { id: 1, type: "표준", speed: 32.5, trajectory: "straight", consistency: 0.7 },
        { id: 2, type: "플랫", speed: 31.8, trajectory: "fade", consistency: 0.65 },
        { id: 3, type: "표준", speed: 33.2, trajectory: "straight", consistency: 0.75 },
        { id: 4, type: "인사이드아웃", speed: 34.0, trajectory: "draw", consistency: 0.72 }
    ],
    
    // 적응기 (5-8회)
    adaptation: [
        { id: 5, type: "표준", speed: 35.5, trajectory: "straight", consistency: 0.78 },
        { id: 6, type: "표준", speed: 36.2, trajectory: "straight", consistency: 0.82 },
        { id: 7, type: "인사이드아웃", speed: 37.0, trajectory: "draw", consistency: 0.85 },
        { id: 8, type: "표준", speed: 37.8, trajectory: "straight", consistency: 0.88 }
    ],
    
    // 절정기 (9-12회)
    peak: [
        { id: 9, type: "표준", speed: 39.5, trajectory: "straight", consistency: 0.92 },
        { id: 10, type: "인사이드아웃", speed: 40.2, trajectory: "draw", consistency: 0.95 },
        { id: 11, type: "표준", speed: 41.0, trajectory: "straight", consistency: 0.98 },
        { id: 12, type: "표준", speed: 41.5, trajectory: "straight", consistency: 0.96 }
    ],
    
    // 안정기 (13-16회)
    stable: [
        { id: 13, type: "표준", speed: 40.8, trajectory: "straight", consistency: 0.94 },
        { id: 14, type: "인사이드아웃", speed: 40.5, trajectory: "draw", consistency: 0.93 },
        { id: 15, type: "표준", speed: 40.2, trajectory: "straight", consistency: 0.92 },
        { id: 16, type: "표준", speed: 39.8, trajectory: "straight", consistency: 0.91 }
    ],
    
    // 마무리 (17-20회)
    finish: [
        { id: 17, type: "표준", speed: 39.0, trajectory: "straight", consistency: 0.89 },
        { id: 18, type: "아웃사이드인", speed: 38.5, trajectory: "fade", consistency: 0.87 },
        { id: 19, type: "표준", speed: 38.0, trajectory: "straight", consistency: 0.86 },
        { id: 20, type: "표준", speed: 37.5, trajectory: "straight", consistency: 0.85 }
    ]
};

// 전체 스윙 데이터를 하나의 배열로 변환
const allSwings = [
    ...swingDataset.warmup,
    ...swingDataset.adaptation,
    ...swingDataset.peak,
    ...swingDataset.stable,
    ...swingDataset.finish
];

// 현재 세션 데이터 구조
const currentSession = {
    timestamp: new Date().toISOString(),
    totalSwings: 20,
    averageSpeed: allSwings.reduce((sum, swing) => sum + swing.speed, 0) / 20,
    maxSpeed: Math.max(...allSwings.map(swing => swing.speed)),
    swingTypes: {
        "표준": allSwings.filter(swing => swing.type === "표준").length,
        "인사이드아웃": allSwings.filter(swing => swing.type === "인사이드아웃").length,
        "아웃사이드인": allSwings.filter(swing => swing.type === "아웃사이드인").length,
        "업라이트": allSwings.filter(swing => swing.type === "업라이트").length,
        "플랫": allSwings.filter(swing => swing.type === "플랫").length
    },
    swings: allSwings
};

// 세션 기록 저장 구조
const sessionHistory = {
    [new Date().toISOString().split('T')[0]]: {
        sessions: [currentSession]
    }
};

// 개인 기록
const personalRecords = {
    maxSpeed: 41.5,
    maxSpeedDate: new Date().toISOString().split('T')[0],
    totalSessions: 1,
    totalSwings: 20,
    averageImprovement: 2.5,
    goals: {
        targetSpeed: 42.0,
        targetSessions: 20
    }
};

// localStorage에 데이터 저장
if (typeof window !== 'undefined') {
    localStorage.setItem('currentSession', JSON.stringify(currentSession));
    localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
    localStorage.setItem('personalRecords', JSON.stringify(personalRecords));
} 