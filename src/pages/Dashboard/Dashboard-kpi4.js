import React, { useState } from "react";

const hospitalsData = [
  {
    id: 1,
    name: "รพ.สต.สำราญ",
    totalPatients: 145,
    controlledPatients: 125,
    percentage: 86.2,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 25, controlled: 22, percentage: 88 },
      "50-59": { total: 45, controlled: 40, percentage: 89 },
      "60-69": { total: 55, controlled: 46, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [78, 82, 85, 86, 84, 86],
    complications: 8,
    newPatients: 12,
    followUpRate: 94,
  },
  {
    id: 2,
    name: "รพ.สต.บ้านโคก",
    totalPatients: 128,
    controlledPatients: 107,
    percentage: 83.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 22, controlled: 19, percentage: 86 },
      "50-59": { total: 38, controlled: 33, percentage: 87 },
      "60-69": { total: 48, controlled: 39, percentage: 81 },
      "70+": { total: 20, controlled: 16, percentage: 80 },
    },
    monthlyData: [80, 81, 83, 84, 82, 84],
    complications: 6,
    newPatients: 8,
    followUpRate: 91,
  },
  {
    id: 3,
    name: "รพ.สต.บ้านหนองนาดี",
    totalPatients: 95,
    controlledPatients: 71,
    percentage: 74.7,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 18, controlled: 14, percentage: 78 },
      "50-59": { total: 28, controlled: 20, percentage: 71 },
      "60-69": { total: 35, controlled: 25, percentage: 71 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [72, 73, 75, 74, 76, 75],
    complications: 12,
    newPatients: 15,
    followUpRate: 87,
  },
  {
    id: 4,
    name: "รพ.สต.โคกสี",
    totalPatients: 163,
    controlledPatients: 142,
    percentage: 87.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 28, controlled: 25, percentage: 89 },
      "50-59": { total: 52, controlled: 46, percentage: 88 },
      "60-69": { total: 58, controlled: 51, percentage: 88 },
      "70+": { total: 25, controlled: 20, percentage: 80 },
    },
    monthlyData: [84, 85, 87, 88, 86, 87],
    complications: 9,
    newPatients: 18,
    followUpRate: 96,
  },
  {
    id: 5,
    name: "รพ.สต.บ้านหนองบัวดีหมี",
    totalPatients: 112,
    controlledPatients: 89,
    percentage: 79.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 20, controlled: 17, percentage: 85 },
      "50-59": { total: 34, controlled: 26, percentage: 76 },
      "60-69": { total: 42, controlled: 32, percentage: 76 },
      "70+": { total: 16, controlled: 14, percentage: 88 },
    },
    monthlyData: [76, 78, 79, 80, 78, 80],
    complications: 10,
    newPatients: 9,
    followUpRate: 89,
  },
  {
    id: 6,
    name: "รพ.สต.ท่าพระ",
    totalPatients: 187,
    controlledPatients: 161,
    percentage: 86.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 32, controlled: 28, percentage: 88 },
      "50-59": { total: 58, controlled: 51, percentage: 88 },
      "60-69": { total: 67, controlled: 56, percentage: 84 },
      "70+": { total: 30, controlled: 26, percentage: 87 },
    },
    monthlyData: [83, 84, 86, 87, 85, 86],
    complications: 11,
    newPatients: 22,
    followUpRate: 93,
  },
  {
    id: 7,
    name: "รพ.สต.บ้านทุ่ม",
    totalPatients: 98,
    controlledPatients: 74,
    percentage: 75.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 17, controlled: 13, percentage: 76 },
      "50-59": { total: 29, controlled: 22, percentage: 76 },
      "60-69": { total: 38, controlled: 28, percentage: 74 },
      "70+": { total: 14, controlled: 11, percentage: 79 },
    },
    monthlyData: [73, 74, 76, 75, 77, 76],
    complications: 13,
    newPatients: 11,
    followUpRate: 85,
  },
  {
    id: 8,
    name: "รพ.สต.บ้านดอนบม",
    totalPatients: 134,
    controlledPatients: 115,
    percentage: 85.8,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 24, controlled: 21, percentage: 88 },
      "50-59": { total: 41, controlled: 36, percentage: 88 },
      "60-69": { total: 49, controlled: 41, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [82, 84, 85, 86, 84, 86],
    complications: 7,
    newPatients: 14,
    followUpRate: 92,
  },
  {
    id: 9,
    name: "รพ.สต.บ้านผือ",
    totalPatients: 89,
    controlledPatients: 68,
    percentage: 76.4,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 16, controlled: 13, percentage: 81 },
      "50-59": { total: 26, controlled: 19, percentage: 73 },
      "60-69": { total: 33, controlled: 24, percentage: 73 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [74, 75, 76, 77, 75, 76],
    complications: 9,
    newPatients: 7,
    followUpRate: 88,
  },
  {
    id: 10,
    name: "รพ.สต.พระลับ",
    totalPatients: 156,
    controlledPatients: 139,
    percentage: 89.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 27, controlled: 25, percentage: 93 },
      "50-59": { total: 48, controlled: 44, percentage: 92 },
      "60-69": { total: 56, controlled: 49, percentage: 88 },
      "70+": { total: 25, controlled: 21, percentage: 84 },
    },
    monthlyData: [86, 87, 89, 90, 88, 89],
    complications: 5,
    newPatients: 16,
    followUpRate: 97,
  },
  {
    id: 11,
    name: "รพ.สต.สาวะถี",
    totalPatients: 178,
    controlledPatients: 148,
    percentage: 83.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 31, controlled: 27, percentage: 87 },
      "50-59": { total: 55, controlled: 47, percentage: 85 },
      "60-69": { total: 64, controlled: 52, percentage: 81 },
      "70+": { total: 28, controlled: 22, percentage: 79 },
    },
    monthlyData: [80, 82, 83, 84, 82, 83],
    complications: 14,
    newPatients: 19,
    followUpRate: 90,
  },
  {
    id: 12,
    name: "รพ.สต.บ้านโนนรัง",
    totalPatients: 201,
    controlledPatients: 172,
    percentage: 85.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 35, controlled: 31, percentage: 89 },
      "50-59": { total: 62, controlled: 54, percentage: 87 },
      "60-69": { total: 74, controlled: 62, percentage: 84 },
      "70+": { total: 30, controlled: 25, percentage: 83 },
    },
    monthlyData: [83, 84, 85, 86, 85, 86],
    complications: 12,
    newPatients: 25,
    followUpRate: 94,
  },
    {
    id: 1,
    name: "รพ.สต.สำราญ",
    totalPatients: 145,
    controlledPatients: 125,
    percentage: 86.2,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 25, controlled: 22, percentage: 88 },
      "50-59": { total: 45, controlled: 40, percentage: 89 },
      "60-69": { total: 55, controlled: 46, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [78, 82, 85, 86, 84, 86],
    complications: 8,
    newPatients: 12,
    followUpRate: 94,
  },
  {
    id: 2,
    name: "รพ.สต.บ้านโคก",
    totalPatients: 128,
    controlledPatients: 107,
    percentage: 83.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 22, controlled: 19, percentage: 86 },
      "50-59": { total: 38, controlled: 33, percentage: 87 },
      "60-69": { total: 48, controlled: 39, percentage: 81 },
      "70+": { total: 20, controlled: 16, percentage: 80 },
    },
    monthlyData: [80, 81, 83, 84, 82, 84],
    complications: 6,
    newPatients: 8,
    followUpRate: 91,
  },
  {
    id: 3,
    name: "รพ.สต.บ้านหนองนาดี",
    totalPatients: 95,
    controlledPatients: 71,
    percentage: 74.7,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 18, controlled: 14, percentage: 78 },
      "50-59": { total: 28, controlled: 20, percentage: 71 },
      "60-69": { total: 35, controlled: 25, percentage: 71 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [72, 73, 75, 74, 76, 75],
    complications: 12,
    newPatients: 15,
    followUpRate: 87,
  },
  {
    id: 4,
    name: "รพ.สต.โคกสี",
    totalPatients: 163,
    controlledPatients: 142,
    percentage: 87.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 28, controlled: 25, percentage: 89 },
      "50-59": { total: 52, controlled: 46, percentage: 88 },
      "60-69": { total: 58, controlled: 51, percentage: 88 },
      "70+": { total: 25, controlled: 20, percentage: 80 },
    },
    monthlyData: [84, 85, 87, 88, 86, 87],
    complications: 9,
    newPatients: 18,
    followUpRate: 96,
  },
  {
    id: 5,
    name: "รพ.สต.บ้านหนองบัวดีหมี",
    totalPatients: 112,
    controlledPatients: 89,
    percentage: 79.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 20, controlled: 17, percentage: 85 },
      "50-59": { total: 34, controlled: 26, percentage: 76 },
      "60-69": { total: 42, controlled: 32, percentage: 76 },
      "70+": { total: 16, controlled: 14, percentage: 88 },
    },
    monthlyData: [76, 78, 79, 80, 78, 80],
    complications: 10,
    newPatients: 9,
    followUpRate: 89,
  },
  {
    id: 6,
    name: "รพ.สต.ท่าพระ",
    totalPatients: 187,
    controlledPatients: 161,
    percentage: 86.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 32, controlled: 28, percentage: 88 },
      "50-59": { total: 58, controlled: 51, percentage: 88 },
      "60-69": { total: 67, controlled: 56, percentage: 84 },
      "70+": { total: 30, controlled: 26, percentage: 87 },
    },
    monthlyData: [83, 84, 86, 87, 85, 86],
    complications: 11,
    newPatients: 22,
    followUpRate: 93,
  },
  {
    id: 7,
    name: "รพ.สต.บ้านทุ่ม",
    totalPatients: 98,
    controlledPatients: 74,
    percentage: 75.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 17, controlled: 13, percentage: 76 },
      "50-59": { total: 29, controlled: 22, percentage: 76 },
      "60-69": { total: 38, controlled: 28, percentage: 74 },
      "70+": { total: 14, controlled: 11, percentage: 79 },
    },
    monthlyData: [73, 74, 76, 75, 77, 76],
    complications: 13,
    newPatients: 11,
    followUpRate: 85,
  },
  {
    id: 8,
    name: "รพ.สต.บ้านดอนบม",
    totalPatients: 134,
    controlledPatients: 115,
    percentage: 85.8,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 24, controlled: 21, percentage: 88 },
      "50-59": { total: 41, controlled: 36, percentage: 88 },
      "60-69": { total: 49, controlled: 41, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [82, 84, 85, 86, 84, 86],
    complications: 7,
    newPatients: 14,
    followUpRate: 92,
  },
  {
    id: 9,
    name: "รพ.สต.บ้านผือ",
    totalPatients: 89,
    controlledPatients: 68,
    percentage: 76.4,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 16, controlled: 13, percentage: 81 },
      "50-59": { total: 26, controlled: 19, percentage: 73 },
      "60-69": { total: 33, controlled: 24, percentage: 73 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [74, 75, 76, 77, 75, 76],
    complications: 9,
    newPatients: 7,
    followUpRate: 88,
  },
  {
    id: 10,
    name: "รพ.สต.พระลับ",
    totalPatients: 156,
    controlledPatients: 139,
    percentage: 89.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 27, controlled: 25, percentage: 93 },
      "50-59": { total: 48, controlled: 44, percentage: 92 },
      "60-69": { total: 56, controlled: 49, percentage: 88 },
      "70+": { total: 25, controlled: 21, percentage: 84 },
    },
    monthlyData: [86, 87, 89, 90, 88, 89],
    complications: 5,
    newPatients: 16,
    followUpRate: 97,
  },
  {
    id: 11,
    name: "รพ.สต.สาวะถี",
    totalPatients: 178,
    controlledPatients: 148,
    percentage: 83.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 31, controlled: 27, percentage: 87 },
      "50-59": { total: 55, controlled: 47, percentage: 85 },
      "60-69": { total: 64, controlled: 52, percentage: 81 },
      "70+": { total: 28, controlled: 22, percentage: 79 },
    },
    monthlyData: [80, 82, 83, 84, 82, 83],
    complications: 14,
    newPatients: 19,
    followUpRate: 90,
  },
  {
    id: 12,
    name: "รพ.สต.บ้านโนนรัง",
    totalPatients: 201,
    controlledPatients: 172,
    percentage: 85.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 35, controlled: 31, percentage: 89 },
      "50-59": { total: 62, controlled: 54, percentage: 87 },
      "60-69": { total: 74, controlled: 62, percentage: 84 },
      "70+": { total: 30, controlled: 25, percentage: 83 },
    },
    monthlyData: [83, 84, 85, 86, 85, 86],
    complications: 12,
    newPatients: 25,
    followUpRate: 94,
  },
    {
    id: 1,
    name: "รพ.สต.สำราญ",
    totalPatients: 145,
    controlledPatients: 125,
    percentage: 86.2,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 25, controlled: 22, percentage: 88 },
      "50-59": { total: 45, controlled: 40, percentage: 89 },
      "60-69": { total: 55, controlled: 46, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [78, 82, 85, 86, 84, 86],
    complications: 8,
    newPatients: 12,
    followUpRate: 94,
  },
  {
    id: 2,
    name: "รพ.สต.บ้านโคก",
    totalPatients: 128,
    controlledPatients: 107,
    percentage: 83.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 22, controlled: 19, percentage: 86 },
      "50-59": { total: 38, controlled: 33, percentage: 87 },
      "60-69": { total: 48, controlled: 39, percentage: 81 },
      "70+": { total: 20, controlled: 16, percentage: 80 },
    },
    monthlyData: [80, 81, 83, 84, 82, 84],
    complications: 6,
    newPatients: 8,
    followUpRate: 91,
  },
  {
    id: 3,
    name: "รพ.สต.บ้านหนองนาดี",
    totalPatients: 95,
    controlledPatients: 71,
    percentage: 74.7,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 18, controlled: 14, percentage: 78 },
      "50-59": { total: 28, controlled: 20, percentage: 71 },
      "60-69": { total: 35, controlled: 25, percentage: 71 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [72, 73, 75, 74, 76, 75],
    complications: 12,
    newPatients: 15,
    followUpRate: 87,
  },
  {
    id: 4,
    name: "รพ.สต.โคกสี",
    totalPatients: 163,
    controlledPatients: 142,
    percentage: 87.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 28, controlled: 25, percentage: 89 },
      "50-59": { total: 52, controlled: 46, percentage: 88 },
      "60-69": { total: 58, controlled: 51, percentage: 88 },
      "70+": { total: 25, controlled: 20, percentage: 80 },
    },
    monthlyData: [84, 85, 87, 88, 86, 87],
    complications: 9,
    newPatients: 18,
    followUpRate: 96,
  },
  {
    id: 5,
    name: "รพ.สต.บ้านหนองบัวดีหมี",
    totalPatients: 112,
    controlledPatients: 89,
    percentage: 79.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 20, controlled: 17, percentage: 85 },
      "50-59": { total: 34, controlled: 26, percentage: 76 },
      "60-69": { total: 42, controlled: 32, percentage: 76 },
      "70+": { total: 16, controlled: 14, percentage: 88 },
    },
    monthlyData: [76, 78, 79, 80, 78, 80],
    complications: 10,
    newPatients: 9,
    followUpRate: 89,
  },
  {
    id: 6,
    name: "รพ.สต.ท่าพระ",
    totalPatients: 187,
    controlledPatients: 161,
    percentage: 86.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 32, controlled: 28, percentage: 88 },
      "50-59": { total: 58, controlled: 51, percentage: 88 },
      "60-69": { total: 67, controlled: 56, percentage: 84 },
      "70+": { total: 30, controlled: 26, percentage: 87 },
    },
    monthlyData: [83, 84, 86, 87, 85, 86],
    complications: 11,
    newPatients: 22,
    followUpRate: 93,
  },
  {
    id: 7,
    name: "รพ.สต.บ้านทุ่ม",
    totalPatients: 98,
    controlledPatients: 74,
    percentage: 75.5,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 17, controlled: 13, percentage: 76 },
      "50-59": { total: 29, controlled: 22, percentage: 76 },
      "60-69": { total: 38, controlled: 28, percentage: 74 },
      "70+": { total: 14, controlled: 11, percentage: 79 },
    },
    monthlyData: [73, 74, 76, 75, 77, 76],
    complications: 13,
    newPatients: 11,
    followUpRate: 85,
  },
  {
    id: 8,
    name: "รพ.สต.บ้านดอนบม",
    totalPatients: 134,
    controlledPatients: 115,
    percentage: 85.8,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 24, controlled: 21, percentage: 88 },
      "50-59": { total: 41, controlled: 36, percentage: 88 },
      "60-69": { total: 49, controlled: 41, percentage: 84 },
      "70+": { total: 20, controlled: 17, percentage: 85 },
    },
    monthlyData: [82, 84, 85, 86, 84, 86],
    complications: 7,
    newPatients: 14,
    followUpRate: 92,
  },
  {
    id: 9,
    name: "รพ.สต.บ้านผือ",
    totalPatients: 89,
    controlledPatients: 68,
    percentage: 76.4,
    status: "failed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 16, controlled: 13, percentage: 81 },
      "50-59": { total: 26, controlled: 19, percentage: 73 },
      "60-69": { total: 33, controlled: 24, percentage: 73 },
      "70+": { total: 14, controlled: 12, percentage: 86 },
    },
    monthlyData: [74, 75, 76, 77, 75, 76],
    complications: 9,
    newPatients: 7,
    followUpRate: 88,
  },
  {
    id: 10,
    name: "รพ.สต.พระลับ",
    totalPatients: 156,
    controlledPatients: 139,
    percentage: 89.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 27, controlled: 25, percentage: 93 },
      "50-59": { total: 48, controlled: 44, percentage: 92 },
      "60-69": { total: 56, controlled: 49, percentage: 88 },
      "70+": { total: 25, controlled: 21, percentage: 84 },
    },
    monthlyData: [86, 87, 89, 90, 88, 89],
    complications: 5,
    newPatients: 16,
    followUpRate: 97,
  },
  {
    id: 11,
    name: "รพ.สต.สาวะถี",
    totalPatients: 178,
    controlledPatients: 148,
    percentage: 83.1,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 31, controlled: 27, percentage: 87 },
      "50-59": { total: 55, controlled: 47, percentage: 85 },
      "60-69": { total: 64, controlled: 52, percentage: 81 },
      "70+": { total: 28, controlled: 22, percentage: 79 },
    },
    monthlyData: [80, 82, 83, 84, 82, 83],
    complications: 14,
    newPatients: 19,
    followUpRate: 90,
  },
  {
    id: 12,
    name: "รพ.สต.บ้านโนนรัง",
    totalPatients: 201,
    controlledPatients: 172,
    percentage: 85.6,
    status: "passed",
    district: "อ.เมือง",
    province: "ขอนแก่น",
    ageGroups: {
      "40-49": { total: 35, controlled: 31, percentage: 89 },
      "50-59": { total: 62, controlled: 54, percentage: 87 },
      "60-69": { total: 74, controlled: 62, percentage: 84 },
      "70+": { total: 30, controlled: 25, percentage: 83 },
    },
    monthlyData: [83, 84, 85, 86, 85, 86],
    complications: 12,
    newPatients: 25,
    followUpRate: 94,
  },
];

function calculateSummary(hospitals) {
  const total = hospitals.length;
  const passed = hospitals.filter((h) => h.status === "passed").length;
  const failed = total - passed;
  const averagePercentage =
    (hospitals.reduce((sum, h) => sum + h.percentage, 0) / total).toFixed(1);
  return { total, passed, failed, averagePercentage };
}

function getStatusBadge(status) {
  return (
    <span className={`status-badge ${status}`}>
      {status === "passed" ? "✅ ผ่านเกณฑ์" : "❌ ไม่ผ่านเกณฑ์"}
    </span>
  );
}

function HospitalModal({ hospital, onClose }) {
  if (!hospital) return null;

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>รายละเอียด {hospital.name}</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          {/* Summary cards */}
          <div className="detail-grid">
            <div className="detail-card">
              <h4>ผู้ป่วยทั้งหมด</h4>
              <div className="value">{hospital.totalPatients}</div>
            </div>
            <div className="detail-card">
              <h4>ควบคุมได้ดี</h4>
              <div className="value" style={{ color: "#4CAF50" }}>
                {hospital.controlledPatients}
              </div>
            </div>
            <div className="detail-card">
              <h4>ร้อยละการควบคุม</h4>
              <div
                className="value"
                style={{
                  color: hospital.status === "passed" ? "#4CAF50" : "#F44336",
                }}
              >
                {hospital.percentage}%
              </div>
            </div>
            <div className="detail-card">
              <h4>ผู้ป่วยใหม่ (เดือนนี้)</h4>
              <div className="value">{hospital.newPatients}</div>
            </div>
            <div className="detail-card">
              <h4>ภาวะแทรกซ้อน</h4>
              <div className="value" style={{ color: "#F44336" }}>
                {hospital.complications}
              </div>
            </div>
            <div className="detail-card">
              <h4>อัตราติดตาม</h4>
              <div className="value" style={{ color: "#2196F3" }}>
                {hospital.followUpRate}%
              </div>
            </div>
          </div>

          {/* Age group chart */}
          <div className="chart-container">
            <div className="chart-title">📊 การควบคุมตามกลุ่มอายุ</div>
            <div className="age-group-chart">
              {Object.entries(hospital.ageGroups).map(
                ([age, data], idx) => (
                  <div key={age}>
                    <div className="age-group-item">
                      <div className="age-group-label">{age} ปี</div>
                      <div className="age-group-bar">
                        <div
                          className="age-group-fill"
                          style={{
                            width: `${data.percentage}%`,
                          }}
                        ></div>
                      </div>
                      <div className="age-group-percentage">
                        {data.percentage}%
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.9em",
                        color: "#666",
                        marginLeft: 100,
                        marginTop: -10,
                        marginBottom: 10,
                      }}
                    >
                      ควบคุมได้: {data.controlled}/{data.total} ราย
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Monthly chart */}
          <div className="chart-container">
            <div className="chart-title">📈 แนวโน้ม 6 เดือนที่ผ่านมา</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                height: 200,
                padding: 20,
                background: "white",
                borderRadius: 10,
              }}
            >
              {hospital.monthlyData.map((value, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      background:
                        "linear-gradient(to top, #4CAF50, #8BC34A)",
                      borderRadius: "4px 4px 0 0",
                      marginBottom: 10,
                      height: `${(value / 100) * 150}px`,
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      paddingTop: 5,
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "0.8em",
                    }}
                  >
                    {value}%
                  </div>
                  <div style={{ fontSize: "0.8em", color: "#666" }}>
                    เดือน {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General info */}
          <div
            style={{
              marginTop: 30,
              padding: 20,
              background: "#f8f9fa",
              borderRadius: 12,
            }}
          >
            <h3 style={{ color: "#333", marginBottom: 15 }}>📍 ข้อมูลทั่วไป</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 15,
              }}
            >
              <div>
                <strong>อำเภอ:</strong> {hospital.district}
              </div>
              <div>
                <strong>จังหวัด:</strong> {hospital.province}
              </div>
              <div>
                <strong>สถานะ:</strong>{" "}
                <span
                  style={{
                    color:
                      hospital.status === "passed" ? "#4CAF50" : "#F44336",
                    fontWeight: "bold",
                  }}
                >
                  {hospital.status === "passed"
                    ? "ผ่านเกณฑ์"
                    : "ไม่ผ่านเกณฑ์"}
                </span>
              </div>
              <div>
                <strong>เป้าหมาย:</strong> ≥ 80%
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 20,
              padding: 20,
              background: hospital.status === "passed" ? "#E8F5E8" : "#FFEBEE",
              borderRadius: 12,
              borderLeft: `4px solid ${
                hospital.status === "passed" ? "#4CAF50" : "#F44336"
              }`,
            }}
          >
            <h4
              style={{
                margin: "0 0 10px 0",
                color:
                  hospital.status === "passed" ? "#2E7D32" : "#C62828",
              }}
            >
              {hospital.status === "passed"
                ? "✅ ข้อเสนอแนะ"
                : "⚠️ จุดที่ควรปรับปรุง"}
            </h4>
            <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
              {hospital.status === "passed"
                ? `${hospital.name} มีการควบคุมความดันโลหิตที่ดีเยี่ยม ควรรักษามาตรฐานการดูแลและเป็นต้นแบบให้หน่วยงานอื่น อัตราติดตาม ${hospital.followUpRate}% ถือว่าดีมาก`
                : `${hospital.name} ควรเพิ่มการติดตามผู้ป่วยอย่างใกล้ชิด ปรับปรุงการให้ความรู้และการปรับเปลี่ยนพฤติกรรม เน้นกลุ่มผู้ป่วยที่มีภาวะแทรกซ้อน ${hospital.complications} ราย`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardKPI4() {
  const summary = calculateSummary(hospitalsData);

  const [modalHospital, setModalHospital] = useState(null);

  // Disable scroll when modal open
  React.useEffect(() => {
    if (modalHospital) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [modalHospital]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    * {margin:0;padding:0;box-sizing:border-box;}
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 20px;
    }
    .container {
        max-width: 1400px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
    .headerKPI4 {
        background: linear-gradient(45deg, #2196F3, #21CBF3);
        color: white;
        padding: 30px;
        text-align: center;
    }
    .headerKPI4 h1 {
        font-size: 2.5em;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    .headerKPI4 p {
        font-size: 1.2em;
        opacity: 0.9;
    }
    .summary-section {
        padding: 30px;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    .summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    .summary-card {
        background: white;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .summary-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    .summary-card h3 {
        color: #333;
        font-size: 1.1em;
        margin-bottom: 15px;
    }
    .summary-card .number {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .summary-card .label {
        color: #666;
        font-size: 0.9em;
    }
    .total {color: #2196F3;}
    .passed {color: #4CAF50;}
    .failed {color: #F44336;}
    .percentage {color: #FF9800;}
    .dashboard-section {padding: 30px;}
    .section-title {
        font-size: 1.8em;
        color: #333;
        margin-bottom: 25px;
        text-align: center;
    }
    .hospital-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
    .hospital-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        border-left: 5px solid transparent;
    }
    .hospital-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    .hospital-card.passed {border-left-color: #4CAF50;}
    .hospital-card.failed {border-left-color: #F44336;}
    .hospital-name {
        font-size: 1.3em;
        font-weight: bold;
        color: #333;
        margin-bottom: 15px;
    }
    .hospital-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .percentage-display {font-size: 2em;font-weight: bold;}
    .percentage-display.passed {color: #4CAF50;}
    .percentage-display.failed {color: #F44336;}
    .patient-count {text-align: right;color: #666;}
    .progress-bar {
        width: 100%;
        height: 12px;
        background: #e0e0e0;
        border-radius: 6px;
        overflow: hidden;
        margin-top: 10px;
    }
    .progress-fill {
        height: 100%;
        border-radius: 6px;
        transition: width 0.5s ease;
    }
    .progress-fill.passed {
        background: linear-gradient(90deg, #4CAF50, #8BC34A);
    }
    .progress-fill.failed {
        background: linear-gradient(90deg, #F44336, #FF5722);
    }
    .status-badge {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: bold;
        margin-top: 10px;
    }
    .status-badge.passed {
        background: #E8F5E8;
        color: #2E7D32;
    }
    .status-badge.failed {
        background: #FFEBEE;
        color: #C62828;
    }
    /* Modal Styles */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        animation: fadeIn 0.3s ease;
    }
    .modal-content {
        background-color: white;
        margin: 5% auto;
        padding: 0;
        border-radius: 20px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        animation: slideIn 0.4s ease;
    }
    .modal-header {
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 25px 30px;
        border-radius: 20px 20px 0 0;
        position: relative;
    }
    .modal-header h2 {
        margin: 0;
        font-size: 1.8em;
    }
    .close {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    .close:hover {background-color: rgba(255, 255, 255, 0.2);}
    .modal-body {padding: 30px;}
    .detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    .detail-card {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }
    .detail-card:hover {
        border-color: #667eea;
        transform: translateY(-2px);
    }
    .detail-card h4 {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .detail-card .value {
        font-size: 1.8em;
        font-weight: bold;
        color: #333;
    }
    .chart-container {
        margin-top: 30px;
        background: #f8f9fa;
        padding: 25px;
        border-radius: 15px;
    }
    .chart-title {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
        font-size: 1.2em;
    }
    .age-group-chart {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .age-group-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .age-group-label {
        font-weight: 500;
        min-width: 100px;
    }
    .age-group-bar {
        flex: 1;
        height: 20px;
        background: #e0e0e0;
        border-radius: 10px;
        margin: 0 15px;
        overflow: hidden;
    }
    .age-group-fill {
        height: 100%;
        background: linear-gradient(90deg, #4CAF50, #8BC34A);
        border-radius: 10px;
        transition: width 0.8s ease;
    }
    .age-group-percentage {
        font-weight: bold;
        color: #333;
        min-width: 50px;
        text-align: right;
    }
    @keyframes fadeIn {from {opacity: 0;}to {opacity: 1;}}
    @keyframes slideIn {from {transform: translateY(-50px);opacity: 0;}to {transform: translateY(0);opacity: 1;}}
    @media (max-width: 768px) {
        .header h1 {font-size: 2em;}
        .hospital-grid {grid-template-columns: 1fr;}
        .modal-content {width: 95%;margin: 10% auto;}
        .detail-grid {grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));}
    }
          `,
        }}
      />
      <div className="container">
        <div className="headerKPI4">
          <h1>🏥 Dashboard ควบคุมความดันโลหิตสูงรพ.สต.ขอนแก่น</h1>
          <p>
            ข้อมูลร้อยละของผู้ป่วยโรคความดันโลหิตสูงที่ควบคุมระดับความดันโลหิตได้ดี
          </p>
        </div>

        <div className="summary-section">
          <div className="summary-cards">
            <div className="summary-card">
              <h3>จำนวน รพ.สต. ทั้งหมด</h3>
              <div className="number total">248</div>
              <div className="label">แห่ง</div>
            </div>
            <div className="summary-card">
              <h3>ผ่านเกณฑ์ (≥80%)</h3>
              <div className="number passed">92</div>
              <div className="label">แห่ง</div>
            </div>
            <div className="summary-card">
              <h3>ไม่ผ่านเกณฑ์ (&lt;80%)</h3>
              <div className="number failed">156</div>
              <div className="label">แห่ง</div>
            </div>
            <div className="summary-card">
              <h3>ร้อยละเฉลี่ยอำเภอ</h3>
              <div className="number percentage">39.29%</div>
              <div className="label">ควบคุมได้ดี</div>
            </div>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="section-title">📊 รายงานแต่ละ รพ.สต.</h2>
          <div className="hospital-grid">
            {hospitalsData.map((hospital) => (
              <div
                className={`hospital-card ${hospital.status}`}
                key={hospital.id}
                onClick={() => setModalHospital(hospital)}
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <div className="hospital-name">{hospital.name}</div>
                <div className="hospital-stats">
                  <div className={`percentage-display ${hospital.status}`}>
                    {hospital.percentage}%
                  </div>
                  <div className="patient-count">
                    ควบคุมได้: {hospital.controlledPatients}/{hospital.totalPatients} ราย
                  </div>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${hospital.status}`}
                    style={{ width: `${hospital.percentage}%` }}
                  />
                </div>
                {getStatusBadge(hospital.status)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalHospital && (
        <HospitalModal
          hospital={modalHospital}
          onClose={() => setModalHospital(null)}
        />
      )}
    </>
  );
}
