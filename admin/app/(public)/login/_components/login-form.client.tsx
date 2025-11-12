'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input/input';

export default function Form() {
  const router = useRouter();
  const t = useTranslations('Login');

  const formSchema = z.object({
    account: z.string().min(2, {
      message: `${t('error-account')}`,
    }),
    password: z.string().min(2, {
      message: `${t('error-password')}`,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.replace('/login/select_identity');
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
        <FormField
          control={form.control}
          name='account'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('account')}</FormLabel>
              <FormControl>
                <Input placeholder={t('placeholder-account')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password')}</FormLabel>
              <FormControl>
                <Input placeholder={t('placeholder-password')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='bg-panda-primary'>
          {t('login')}
        </Button>
      </form>
    </FormProvider>
  );
}
