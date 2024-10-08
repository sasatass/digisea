---
layout: default
title: "The Home of Maritime SaaS"
description: "digisea is streamlining discovery, review, and comparison of maritime SaaS solutions."
keywords: "maritime, SaaS, software, digisea, shipping industry"
---

<!-- Hero Section -->
<section id="hero" style="background-image: url('{{ '/assets/images/hero-image.jpg' | relative_url }}');">
    <div class="container">
        <h1>Discover, view demos, and compare...</h1>
        <p>...SaaS solutions for maritime.</p>
        <a href="#waitlist-form" class="cta-button">Join the Waitlist</a>
    </div>
</section>

<!-- Main Content -->
<main>
    <!-- Challenge Section -->
    <section id="challenge">
        <div class="container">
            <h2>The Challenge</h2>
            <div class="stat-grid">
                <div class="stat-card">
                    <img src="{{ '/assets/images/stat1.png' | relative_url }}" alt="71% of maritime companies struggle to find suitable digital solutions" class="stat-icon" />
                    <h3>71%</h3>
                    <p>of maritime companies struggle to find suitable digital solutions for their unique needs.</p>
                    <small>Source: DNV GL Maritime Impact 2019</small>
                </div>
                <div class="stat-card">
                    <img src="{{ '/assets/images/stat2.png' | relative_url }}" alt="80% of B2B buyers rely on peer recommendations" class="stat-icon" />
                    <h3>80%</h3>
                    <p>of B2B buyers rely on peer recommendations when making software purchasing decisions.</p>
                    <small>Source: Gartner</small>
                </div>
                <div class="stat-card">
                    <img src="{{ '/assets/images/stat3.png' | relative_url }}" alt="60% of startups struggle to gain market traction" class="stat-icon" />
                    <h3>42%</h3>
                    <p>growth in the maritime startup ecosystem in the last three years, but 60% of these startups struggle to gain market traction.</p>
                    <small>Source: Maritime Innovation Report 2023</small>
                </div>
            </div>
        </div>
    </section>
    <!-- Vision Section -->
    <section id="vision">
        <div class="container">
            <h2>Our Vision</h2>
            <div class="vision-content">
                <div class="vision-text">
                    <p>digisea aims to be the definitive home for maritime SaaS, bridging the gap between innovative software solutions and the industry professionals who need them. We're creating a comprehensive, user-centric platform that allows maritime professionals to easily discover, explore, and compare the most advanced SaaS offerings in the industry.</p>
                </div>
                <div class="vision-image">
                    <img src="{{ '/assets/images/vision1.png' | relative_url }}" alt="Illustration depicting digisea's vision" />
                </div>
            </div>
        </div>
    </section>
    <!-- Industry Insights Section -->
    <section id="insights">
        <div class="container">
            <h2>Industry Insights</h2>
            <div class="insight-grid">
                <div class="insight-card">
                    <img src="{{ '/assets/images/insight1.png' | relative_url }}" alt="Expected size of the global maritime technology market" class="insight-icon" />
                    <h3>$278.8 billion</h3>
                    <p>Expected size of the global maritime technology market by 2028, growing at a CAGR of 8.7% from 2021 to 2028.</p>
                    <small>Source: Grand View Research, 2021</small>
                </div>
                <div class="insight-card">
                    <img src="{{ '/assets/images/insight2.png' | relative_url }}" alt="69% of shipping companies believe digital transformation is crucial" class="insight-icon" />
                    <h3>69%</h3>
                    <p>of shipping companies believe that digital transformation is crucial for their future success.</p>
                    <small>Source: Nautilus International Survey, 2022</small>
                </div>
            </div>
        </div>
    </section>
    <!-- Solution Section -->
    <section id="solution">
        <div class="container">
            <h2>The Solution</h2>
            <div class="solution-content reverse">
                <div class="solution-text">
                    <p>digisea: The home of maritime SaaS — empowering the industry through streamlined discovery, review, and comparison of cutting-edge software solutions.</p>
                    <ul class="feature-list">
                        <li>Centralize Information</li>
                        <li>Empower User Feedback</li>
                        <li>Bridge the Innovation Gap</li>
                        <li>Foster Transparency</li>
                        <li>Drive Industry Growth</li>
                    </ul>
                </div>
                <div class="solution-image">
                    <img src="{{ '/assets/images/solution1.png' | relative_url }}" alt="Illustration of digisea's solution" />
                </div>
            </div>
        </div>
    </section>
    <!-- Waitlist Form Section -->
    <section id="waitlist-form">
        <div class="container">
            <h2>Hop aboard now...</h2>
            <p>Be the first to know when digisea launches. Join our waitlist today!</p>
            <form id="signup-form" action="https://docs.google.com/forms/d/e/1FAIpQLSd4XLS3GaJ1BfBnubuOQs6yFrV_i00HP-w6_TChNXnruLateg/formResponse" method="POST" target="hidden_iframe" onsubmit="window.submitted=true;">
                <input type="email" name="entry.1719579522" placeholder="Enter your email address" required>
                <button type="submit" class="form button">Join Waitlist</button>
            </form>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(window.submitted) { window.formSubmissionSuccess(); }"></iframe>
            <p id="message"></p>
        </div>
    </section>
</main>
