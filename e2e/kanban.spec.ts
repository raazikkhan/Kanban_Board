import { test, expect } from '@playwright/test';

test.describe('Kanban Board', () => {
  test('should display initial columns and cards', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('text=Kanban Board')).toBeVisible();
    await expect(page.locator('text=Backlog')).toBeVisible();
    await expect(page.locator('text=Research competitors')).toBeVisible();
  });

  test('should add a new card', async ({ page }) => {
    await page.goto('/');
    
    await page.locator('text=Add a card').first().click();
    
    await page.fill('input[placeholder="e.g. Design homepage"]', 'My New E2E Card');
    await page.fill('textarea[placeholder="Add more details..."]', 'E2E test details');
    
    await page.click('button:has-text("Add Card")');
    
    await expect(page.locator('text=My New E2E Card')).toBeVisible();
  });

  test('should delete a card', async ({ page }) => {
    await page.goto('/');
    
    const card = page.locator('text=Research competitors').first();
    await expect(card).toBeVisible();
    
    await page.locator('button[title="Delete card"]').first().click();
    
    await expect(page.locator('text=Research competitors')).not.toBeVisible();
  });
});
