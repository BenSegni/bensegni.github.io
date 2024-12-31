import { GlobalDataService } from './global-data.service';
import { TestBed } from '@angular/core/testing';

describe('GlobalDataService', () => {
    let service: GlobalDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GlobalDataService);
    });

    describe('Testing onLoad()', () => {
        it('should save isLoading to false', (done) => {
            service.onLoad();

            service['delay$'].subscribe({
                complete: () => {
                    expect(service.isLoading).toBeFalsy();
                    done();
                }
            });
        })
    });

    describe('Testing onInitialLoad()', () => {
        it('should save isLoading to false', (done) => {
            const sessionSpy = spyOn(window.sessionStorage, 'setItem').and.callFake(() => { })

            service.onInitialLoad();

            service['delay$'].subscribe({
                next: () => {
                    expect(sessionSpy).toHaveBeenCalled()
                },
                complete: () => {
                    expect(service.isLoading).toBeFalsy();
                    done();
                }
            });
        })
    });
});
