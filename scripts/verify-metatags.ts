/**
 * Meta Tags Verification Script
 * Run this script to verify all meta tags are present across industry and comparison pages
 */

import { industries } from "../lib/industries";
import { comparisons } from "../lib/comparisons";

function verifyMetaTags() {
  console.log("=".repeat(80));
  console.log("META TAGS VERIFICATION REPORT");
  console.log("=".repeat(80));

  let totalPages = 0;
  let pagesWithIssues = 0;

  console.log("\n📊 CHECKING INDUSTRY PAGES...\n");
  
  industries.forEach((industry) => {
    totalPages++;
    const issues = [];

    if (!industry.metaTitle || industry.metaTitle.trim().length === 0) {
      issues.push("❌ Missing metaTitle");
    } else if (industry.metaTitle.length < 30 || industry.metaTitle.length > 60) {
      issues.push(`⚠️  metaTitle length (${industry.metaTitle.length} chars) - recommend 30-60 chars`);
    } else {
      issues.push(`✅ metaTitle: ${industry.metaTitle.length} chars`);
    }

    if (!industry.metaDescription || industry.metaDescription.trim().length === 0) {
      issues.push("❌ Missing metaDescription");
    } else if (industry.metaDescription.length < 120 || industry.metaDescription.length > 160) {
      issues.push(`⚠️  metaDescription length (${industry.metaDescription.length} chars) - recommend 120-160 chars`);
    } else {
      issues.push(`✅ metaDescription: ${industry.metaDescription.length} chars`);
    }

    if (!industry.keywords || industry.keywords.length === 0) {
      issues.push("❌ Missing keywords array");
    } else {
      issues.push(`✅ keywords: ${industry.keywords.length} keywords`);
    }

    if (issues.some((issue) => issue.includes("❌"))) {
      pagesWithIssues++;
      console.log(`🔴 ${industry.name} (${industry.slug}):`);
      issues.forEach((issue) => console.log(`   ${issue}`));
    } else if (issues.some((issue) => issue.includes("⚠️"))) {
      pagesWithIssues++;
      console.log(`🟡 ${industry.name} (${industry.slug}):`);
      issues.forEach((issue) => console.log(`   ${issue}`));
    } else {
      console.log(`🟢 ${industry.name} (${industry.slug}): All meta tags present and optimized`);
    }
    console.log("");
  });

  console.log("\n📊 CHECKING COMPARISON PAGES...\n");

  comparisons.forEach((comparison) => {
    const issues = [];

    if (!comparison.metaTitle || comparison.metaTitle.trim().length === 0) {
      issues.push("❌ Missing metaTitle");
    } else if (comparison.metaTitle.length < 30 || comparison.metaTitle.length > 60) {
      issues.push(`⚠️  metaTitle length (${comparison.metaTitle.length} chars) - recommend 30-60 chars`);
    } else {
      issues.push(`✅ metaTitle: ${comparison.metaTitle.length} chars`);
    }

    if (!comparison.metaDescription || comparison.metaDescription.trim().length === 0) {
      issues.push("❌ Missing metaDescription");
    } else if (comparison.metaDescription.length < 120 || comparison.metaDescription.length > 160) {
      issues.push(`⚠️  metaDescription length (${comparison.metaDescription.length} chars) - recommend 120-160 chars`);
    } else {
      issues.push(`✅ metaDescription: ${comparison.metaDescription.length} chars`);
    }

    if (!comparison.keywords || comparison.keywords.length === 0) {
      issues.push("❌ Missing keywords array");
    } else {
      issues.push(`✅ keywords: ${comparison.keywords.length} keywords`);
    }

    if (issues.some((issue) => issue.includes("❌"))) {
      pagesWithIssues++;
      console.log(`🔴 ${comparison.competitorName} (${comparison.slug}):`);
      issues.forEach((issue) => console.log(`   ${issue}`));
    } else if (issues.some((issue) => issue.includes("⚠️"))) {
      pagesWithIssues++;
      console.log(`🟡 ${comparison.competitorName} (${comparison.slug}):`);
      issues.forEach((issue) => console.log(`   ${issue}`));
    } else {
      console.log(`🟢 ${comparison.competitorName} (${comparison.slug}): All meta tags present and optimized`);
    }
    console.log("");
    totalPages++;
  });

  console.log("=".repeat(80));
  console.log("SUMMARY");
  console.log("=".repeat(80));
  console.log(`Total Pages Checked: ${totalPages}`);
  console.log(`Pages with Issues: ${pagesWithIssues}`);
  console.log(`Pages Optimized: ${totalPages - pagesWithIssues}`);
  
  if (pagesWithIssues === 0) {
    console.log("\n✅ ALL META TAGS ARE PRESENT AND OPTIMIZED!");
  } else {
    console.log(`\n⚠️  ${pagesWithIssues} pages need attention`);
  }
  
  console.log("=".repeat(80));
}

verifyMetaTags();
