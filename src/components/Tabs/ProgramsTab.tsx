import React from 'react';

export const ProgramsTab = () => {
  return (
    <div className="mb-24">
      <div className="space-y-10">
        <div id="depression-and-mood-disorders-program">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Depression and Mood Disorders Program</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            A comprehensive program for those experiencing conditions such as depression, anxiety, ADHD, self-injury, and other mental health concerns. This program offers a variety of therapy modalities and creative approaches to engage patients:
          </p>
          <ul className="text-gray-700 space-y-2 text-base">
            <li><span className="text-[#002855]">Evening Creative Arts Program</span>: Group therapy after typical school/work hours that uses art, music, movement, animal-assisted therapy, horticulture, recreation, and occupational therapy to promote healing in a creative way.</li>
            <li><span className="text-[#002855]">Emerging Adult Program</span>: Specialized support for older teens and young adults (typically 18–25) who are navigating mental health challenges while transitioning to adulthood. Emphasizes life-skills, Acceptance and Commitment Therapy (ACT), and Motivational Interviewing to foster independence.</li>
            <li><span className="text-[#002855]">Psychosis Program</span>: Focused care for individuals experiencing psychosis-related symptoms that interfere with work, school, or daily life. This track helps patients manage symptoms like hallucinations or delusions with therapy, medication management, and structured support.</li>
          </ul>
        </div>

        <div id="anxiety-and-ocd-program" className="border-t border-gray-200 pt-10">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Anxiety & OCD Program</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Comprehensive care for anxiety disorders and obsessive-compulsive disorder. We offer specialized tracks within this program (for example, tracks for children, teens, or adults) to address specific needs. Treatment may include cognitive-behavioral therapy with exposure and response prevention, stress management techniques, and family education.
          </p>
          <ul className="text-gray-700 space-y-2 text-base">
            <li><span className="text-[#002855]">Autism & Mental Health Program (Aspirations)</span>: Specialized support for adolescents on the autism spectrum who are also dealing with anxiety, depression, or other mood disorders. Our clinicians understand the unique challenges of ASD and help teens build social skills, manage emotions, and reduce anxiety in a structured, supportive setting.</li>
            <li><span className="text-[#002855]">Child Anxiety Program</span>: Targeted therapy for children who struggle with excessive worry, phobias, or school anxiety. This program uses age-appropriate techniques (like play therapy and skills training) to help children learn coping strategies and resilience, while involving parents in the process for support at home.</li>
            <li><span className="text-[#002855]">School Refusal Program</span>: A focused program for children and adolescents who are refusing school due to anxiety or other emotional issues. We help identify the underlying causes of school avoidance and work with the child and family on strategies to reintegrate into the school environment, including anxiety management, peer support, and coordination with schools.</li>
            <li><span className="text-[#002855]">Perinatal & Postpartum Mental Health Program</span>: Dedicated treatment for new or expecting mothers experiencing perinatal or postpartum depression, anxiety, OCD, or trauma-related symptoms. This program provides therapy (often including mother-baby sessions), psychiatric support, and coping tools to ensure both mom and baby are supported during this period.</li>
          </ul>
        </div>

        <div id="addictions-and-dual-diagnosis-program" className="border-t border-gray-200 pt-10">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Addictions & Dual Diagnosis Program</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Integrated treatment for individuals dealing with substance use disorders and co-occurring mental health conditions. This program addresses both addiction and underlying issues to support lasting recovery.
          </p>
          <ul className="text-gray-700 space-y-2 text-base">
            <li><span className="text-[#002855]">Dual Diagnosis</span>: Combines addiction treatment with therapy for co-occurring conditions (such as depression or anxiety) to treat the whole person simultaneously.</li>
            <li><span className="text-[#002855]">Detoxification & Withdrawal Management</span>: Medically supervised detox services to help patients safely manage withdrawal from alcohol or drugs in a comfortable, monitored setting.</li>
            <li><span className="text-[#002855]">Ongoing Addiction Recovery Services (OARS)</span>: Long-term recovery support, including relapse prevention planning, support groups, and continued counseling to help you maintain sobriety and healthy coping skills.</li>
          </ul>
        </div>

        <div id="ptsd-and-trauma-program" className="border-t border-gray-200 pt-10">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">PTSD & Trauma Program</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Evidence-based treatment for those recovering from trauma and post-traumatic stress. The program may include trauma-focused cognitive-behavioral therapies, EMDR (Eye Movement Desensitization and Reprocessing) therapy, and specialized group sessions to process traumatic experiences in a safe and supportive setting. Our goal is to help you regain a sense of control, safety, and hope after trauma.
          </p>
        </div>

        <div id="eating-disorders-program" className="border-t border-gray-200 pt-10">
          <h2 className="text-4xl mb-1.5 font-spectral tracking-tight font-normal">Eating Disorders Program</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Multidisciplinary care for anorexia, bulimia, binge eating disorder, ARFID, and related eating or body image issues. This program combines medical supervision, nutritional counseling, therapy, and family support to address the physical and emotional aspects of eating disorders.
          </p>
        </div>
      </div>
    </div>
  );
};