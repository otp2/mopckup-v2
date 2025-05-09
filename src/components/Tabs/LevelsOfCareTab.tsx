import React from 'react';
import { AccordionSection } from '../AccordionSection'; // Assuming AccordionSection is in ../

interface LevelsOfCareTabProps {
  openAccordion: string;
  setOpenAccordion: (id: string) => void;
}

export const LevelsOfCareTab: React.FC<LevelsOfCareTabProps> = ({ openAccordion, setOpenAccordion }) => {
  return (
    <div className="mb-24">
      <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Levels of Care</h2>
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        We understand that everyone's situation is different, so we offer multiple levels of care to match the intensity of support you need. From 24/7 hospital care to convenient outpatient visits, our continuum of care ensures you can get help on your terms. Below are the main levels of care we provide:
      </p>

      <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-1.5 mt-3 font-spectral tracking-tight font-normal">Hospital-Based Care</h2>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-2">
        For individuals in crisis or experiencing severe symptoms, our hospital-based services provide intensive, structured treatment in a safe environment with 24/7 support.
      </p>
      {/* Expandable Sections */}
      <div className="space-y-4 sm:space-y-3 mb-12 sm:mb-16">
        {[
          {
            id: 'assessment',
            title: 'Assessment & Referral',
            content: <p className="text-gray-700 text-base leading-relaxed py-2">Start with a confidential evaluation by a licensed mental health professional. Our team assesses your needs and recommends the appropriate level of care. (Same-day appointments are available for assessments, so you can get answers and a plan quickly.)</p>
          },
          {
            id: 'inpatient',
            title: 'Inpatient Hospitalization',
            content: <p className="text-gray-700 text-base leading-relaxed py-2">Round-the-clock, inpatient treatment for those who need acute stabilization and care. In our secure hospital unit, patients receive intensive support, medication management, and therapy every day. This level is best for individuals who pose a danger to themselves, are in acute crisis, or need constant supervision for safety.</p>
          },
          {
            id: 'php',
            title: 'Partial Hospitalization & Intensive Outpatient Programs (PHP & IOP)',
            content: (
              <>
                <p className="text-gray-700 text-base leading-relaxed">
                  These are daytime intensive programs that allow you to receive structured treatment during the day and return home in the evening. They are ideal if you need a high level of support but not 24-hour care.
                </p>
                <ul className="text-gray-700 text-base leading-relaxed space-y-2 mt-4">
                  <li>Partial Hospitalization Program (PHP): A full-day program (approximately 5–6 hours per day, five days a week) that provides comprehensive treatment including group therapy, individual counseling, psychiatric care, and skills workshops. PHP is often a step down from inpatient or a step up from regular outpatient therapy, designed to keep you progressing without overnight hospital stay.</li>
                  <li>Intensive Outpatient Program (IOP): A half-day program (around 3–4 hours per day, five days a week) offering intensive therapy on a part-time schedule. IOP allows you to maintain some daily routines (like work, school, or family time) while participating in rigorous treatment.</li>
                  <p className="pl-0">Our PHP and IOP tracks are offered for various needs – including depression, anxiety, addiction, eating disorders, and trauma – and we have both daytime and evening scheduling options available to accommodate your life.</p>
                </ul>
              </>
            )
          }
        ].map((section) => (
          <AccordionSection key={section.id} {...section} isOpen={openAccordion === section.id} onToggle={() => setOpenAccordion(openAccordion === section.id ? '' : section.id)} />
        ))}
      </div>

      <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-1.5 font-spectral tracking-tight font-normal">Office Based Outpatient Services</h2>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-2">
        Our office-based outpatient services provide flexible mental health care that fits into your routine. These services are great for long-term recovery, follow-up after intensive programs, or for individuals whose conditions are stable enough to be managed with periodic appointments. You'll work one-on-one or in small groups with our licensed clinicians.
      </p>
      <div className="space-y-4 sm:space-y-3 mb-12 sm:mb-16">
        {[
          {
            id: 'medication',
            title: 'Psychiatric Services/Med Management',
            content: <p className="text-gray-700 text-base leading-relaxed">Regular monitoring and adjustment of medications to ensure optimal effectiveness and minimal side effects.</p>
          },
          {
            id: 'testing',
            title: 'Neuropsychological & Psychological Testing',
            content: (
              <React.Fragment>
                <p className="text-gray-700 text-base leading-relaxed">
                  In-depth assessment services to better understand your cognitive functioning, behavior, and emotional health.
                </p>
                <ul className="text-gray-700 text-base leading-relaxed space-y-2">
                  <li>Neuropsychological Testing: standardized tests conducted by a psychologist to evaluate things like memory, attention, problem-solving, and other brain functions. These tests can help in diagnosing conditions such as learning disorders, ADHD, or the cognitive effects of trauma and guide us in crafting the right treatment plan.</li>
                  <li>Psychological Testing: assessments and questionnaires that help diagnose mental health conditions (for example, personality tests, mood inventories, etc.). The insights from these tests ensure we have a clear picture of what you're experiencing, so we can personalize your care plan.</li>
                </ul>
              </React.Fragment>
            )
          },
          {
            id: 'therapy',
            title: 'Therapy & Counseling',
            content: (
              <React.Fragment>
                <p className="text-gray-700 text-base leading-relaxed">
                  This can include individual therapy (one-on-one counseling focusing on your personal goals and challenges), group therapy (therapist-led sessions where you gain support and skills alongside others with similar struggles), and family therapy (working with you and your loved ones to improve communication and healing at home). Our clinicians are trained in modalities like cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), trauma-informed therapy, and more – always tailored to your situation.
                </p>
              </React.Fragment>
            )
          }
        ].map((section) => (
          <AccordionSection key={section.id} {...section} isOpen={openAccordion === section.id} onToggle={() => setOpenAccordion(openAccordion === section.id ? '' : section.id)} />
        ))}
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-1.5 font-spectral tracking-tight font-normal">Additional Services & Support</h2>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
          In addition to our core programs and levels of care, we offer several supplementary services to enhance your treatment and support your long-term recovery:
        </p>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-start group hover:text-[#235ff8] transition-colors">
              <div className="border-b-2 border-gray-200 group-hover:border-[#235ff8] group-hover:text-[#235ff8] transition-colors pb-3 sm:pb-4 text-[#002855] font-medium text-sm sm:text-base pr-12">
                <p><span className="font-semibold">Telehealth & Virtual Care</span></p>
                <p className="mt-2">Can't make it to an office? Eligible patients can access therapy sessions, psychiatric consultations, and even certain PHP/IOP programs through secure video conferencing. This remote option brings our care to the comfort of your home, making it easier to stay consistent with treatment if you have transportation, distance, or scheduling challenges.</p>
              </div>
              <svg className="w-6 h-6 ml-4 mt-12 flex-shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.eehealth.org/services/behavioral-health/services-and-levels-of-care/ehmg-therapy-groups/" 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-start group hover:text-[#235ff8] transition-colors">
              <div className="border-b-2 border-gray-200 group-hover:border-[#235ff8] group-hover:text-[#235ff8] transition-colors pb-3 sm:pb-4 text-[#002855] font-medium text-sm sm:text-base pr-12">
                <p><span className="font-semibold bg-[#FFB81C]">Therapy Groups</span></p>
                <p className="mt-2">We offer a variety of therapist-led group sessions focusing on specific skills and topics. Examples include mindfulness meditation groups, social skills groups, relapse prevention groups, and creative expression groups. In these sessions, you'll practice coping strategies and build recovery skills alongside peers, guided by a professional – a great way to learn and not feel alone.</p>
              </div>
              <svg className="w-6 h-6 ml-4 mt-12 flex-shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.eehealth.org/services/behavioral-health/services-and-levels-of-care/support-groups/" 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-start group hover:text-[#235ff8] transition-colors">
              <div className="border-b-2 border-gray-200 group-hover:border-[#235ff8] group-hover:text-[#235ff8] transition-colors pb-3 sm:pb-4 text-[#002855] font-medium text-sm sm:text-base pr-12">
                <p><span className="font-semibold bg-[#FFB81C]">Support Groups</span></p>
                <p className="mt-2">Connect with others who truly understand what you're going through. Support groups are often peer-led (facilitated by individuals who have lived experience with similar challenges). These meetings provide a safe space to share stories, celebrate successes, and encourage each other. Support groups can be an invaluable source of hope and motivation throughout your healing journey.</p>
              </div>
              <svg className="w-6 h-6 ml-4 mt-12 flex-shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.eehealth.org/services/behavioral-health/services-and-levels-of-care/tms/" 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-start group hover:text-[#235ff8] transition-colors">
              <div className="border-b-2 border-gray-200 group-hover:border-[#235ff8] group-hover:text-[#235ff8] transition-colors pb-3 sm:pb-4 text-[#002855] font-medium text-sm sm:text-base pr-12">
                <p><span className="font-semibold">TMS (Transcranial Magnetic Stimulation)</span></p>
                <p className="mt-2">An advanced, non-invasive treatment for conditions like depression, anxiety, and OCD that haven't fully responded to therapy or medication. TMS uses targeted magnetic pulses to stimulate specific areas of the brain involved in mood regulation. It's an outpatient procedure (no anesthesia or surgery) typically performed in a series of short sessions. For many patients, TMS can reduce symptoms and improve mood without the systemic side effects of medications.</p>
              </div>
              <svg className="w-6 h-6 ml-4 mt-12 flex-shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-10 mt-10">
        <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">School & Community Support</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          Resources and support for schools and community organizations to promote mental health awareness and early intervention.
        </p>
        <a href="https://www.eehealth.org/services/behavioral-health/professionals/behavioral-health-school-navigation-requests/" target="_blank" rel="noopener noreferrer" className="text-[#235ff8] hover:underline bg-[#FFB81C] inline-block px-2 py-1 text-sm mb-2">LINKS TO OPERATIONS PAGE</a>
      </div>
    </div>
  );
}; 