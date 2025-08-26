<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <TopBar />
    
    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <!-- Title -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Legal Notice</h1>
          <div class="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
          <p class="text-gray-600 mt-4">Last updated: {{ new Date().toLocaleDateString() }}</p>
        </div>

        <!-- Content -->
        <div class="content max-w-7xl mx-auto px-4 py-6">
            <div class="bg-white p-6 rounded-lg shadow">
                <section>
                    <p>Your trust is important to us. We understand the importance of user information security and will implement security measures in accordance with legal and regulatory requirements to ensure your information remains secure and manageable. Accordingly, <strong>Koovity</strong> ("we") has established this Legal Statement and Privacy Policy (hereinafter referred to as the "Statement and Policy") to remind you:</p>
                    <p>Before using the services on the Koovity website, please carefully read and thoroughly understand this Legal Statement and Privacy Policy. Only use the relevant products and services after confirming your full understanding and agreement. By beginning to use Koovity's global agent services, you will be deemed to have accepted and acknowledged the contents of this Statement and Policy.</p>
                </section>

                <h2 class="text-xl font-semibold mt-6">Privacy Policy</h2>
                <section>
                    <p>Koovity ("we") respects and protects user information and will treat such information with the utmost diligence and prudence. When you use Koovity's services, we will collect, process, and disclose your information in accordance with this Privacy Policy. We hope that this Privacy Policy will clearly explain how we handle your information, so we encourage you to read it in its entirety to help you understand how to protect your privacy.</p>
                    <p>If you have any questions, comments, or suggestions, please contact us through the various contact methods provided by Koovity.</p>
                </section>

                <h3 class="text-lg font-semibold mt-4">I. Scope of This Protocol</h3>
                <ul class="list-disc list-inside">
                    <li><strong>1.1.</strong> This Privacy Policy applies to all services on the Koovity website.</li>
                    <li><strong>1.2.</strong> It is important to note that as a Koovity user, if you utilize Koovity's global IP services to provide services to your users, you must agree on a separate privacy policy with your users.</li>
                </ul>

                <h3 class="text-lg font-semibold mt-4">II. How We Collect and Use Your User Information</h3>
                <div>
                    <p><strong>(I) Circumstances in Which We Collect Your User Information</strong></p>
                    <ul class="list-disc list-inside">
                        <li>2.1. Helping You Become a Member</li>
                        <li>2.2. Providing You with Technical Services</li>
                    </ul>
                    <p><strong>(II) Circumstances in Which We Use Your User Information</strong></p>
                    <ul class="list-disc list-inside">
                        <li><strong>2.3.</strong> We use the user information you submit and that we collect for the following purposes:</li>
                        <ul class="list-disc list-inside">
                            <li>To provide you with services, we may send you information, notifications, or conduct business communications.</li>
                            <li>We may use statistical data collected from user information to design, develop, and promote new products and services.</li>
                            <li>Before using user information beyond the stated purpose, we will notify you again and obtain your explicit consent.</li>
                        </ul>
                    </ul>
                </div>

                <h3 class="text-lg font-semibold mt-4">III. How We Share, Transfer, and Publicly Disclose Your User Information</h3>
                <div>
                    <p><strong>3.1. Sharing</strong></p>
                    <p>We will not share your user information with other organizations or individuals, except in the following circumstances:</p>
                    <ul class="list-disc list-inside">
                        <li>3.1.1. Sharing with Explicit Consent.</li>
                        <li>3.1.2. Sharing in Legal Circumstances.</li>
                    </ul>
                    <p><strong>3.2. Transfer</strong></p>
                    <p>We will not transfer your user information to any company, organization, or individual, except in the following circumstances:</p>
                    <ul class="list-disc list-inside">
                        <li>3.2.1. Transfer with Explicit Consent.</li>
                    </ul>
                    <p><strong>3.3. Public Disclosure</strong></p>
                    <p>We will only publicly disclose your user information in the following circumstances:</p>
                    <ul class="list-disc list-inside">
                        <li>3.3.1. With your explicit consent.</li>
                    </ul>
                </div>

                <h3 class="text-lg font-semibold mt-4">IV. Special Provisions Regarding Information of Minors</h3>
                <ul class="list-disc list-inside">
                    <li><strong>4.1.</strong> We primarily provide products and services for adults.</li>
                    <li><strong>4.2.</strong> When personal information of minors is collected, we will only use, share, transfer, or disclose this information when permitted by law.</li>
                </ul>

                <h3 class="text-lg font-semibold mt-4">V. Privacy Policy Updates</h3>
                <ul class="list-disc list-inside">
                    <li>5.1. Our Privacy Policy may be revised.</li>
                    <li>5.2. We will not restrict your rights without your explicit consent.</li>
                    <li>5.3. For major revisions, we will provide more prominent notice.</li>
                </ul>

                <h3 class="text-lg font-semibold mt-4">VI. How to Contact Us</h3>
                <p>If you have any questions or comments about this Statement and Policy, you may contact us through Koovity's official customer service.</p>
            </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script setup>
import TopBar from '~/components/topBar.vue';
import FooterBar from '~/components/footerBar.vue';

// Set page title
useHead({
  title: 'Legal Notice - DYNAVERA',
  meta: [
    { name: 'description', content: 'Legal notice and terms of service for DYNAVERA proxy services.' }
  ]
})
</script>
